var App = function(){

	this.pages = {};

	this.init();

};

App.prototype.init = function() {

	// test
	// this.pages.booking = new Booking();
	// this.pages.booking.show();
	
	this.pages.rango = new Rango();
	this.pages.madmax = new Madmax();
	this.pages.starwars = new Starwars();

	// liaisons
	this.pages.rango.nextView = this.pages.starwars.prevView = this.pages.madmax;
	this.pages.rango.prevView = this.pages.madmax.nextView = this.pages.starwars;
	this.pages.starwars.nextView = this.pages.madmax.prevView = this.pages.rango;

	// première page
	this.pages.madmax.show();
};

$(document).ready(function(){

	var app = new App();

});

// Classe movieRoom
var Room = function  () {
	this.domElem = $('#room');

	this.videoBg = $('#room .bg-trailer');
	this.videoFg = $('#room .fg-trailer');

	this.nextButton = $('.arrow-right');
	this.prevButton = $('.arrow-left');

	this.trailerCta = $('#trailer');
	this.synopsisCta = $('#synopsis');
	this.bookingCta = $('#booking');

	this.cross = $('.trailer-container .cross');
	this.play = $('.trailer-container .continue');
}
Room.prototype.init = function() {

	this.domElem.removeClass();
	this.domElem.addClass(this.nameView);

	this.videoFg.attr( "poster", this.posterFg );
    $('#room .fg-trailer source').attr( "src", this.sourceFg );
    this.videoFg.load();
    this.videoFg.autobuffer=true;

    this.videoBg.attr( "poster", this.posterBg );
    $('#room .bg-trailer source').attr( "src", this.sourceBg );
	this.videoBg.load();
	this.videoBg.autobuffer=true;

	$('.title').text(this.film.title);
	$('.subtitle').text(this.film.subtitle);
};
Room.prototype.show = function() {
	// body...
	this.init();

	this.bind();

	var self = this;

	this.domElem.fadeIn(function(){

		// Une fois que le domElem est affiché
		// On appelle une fonction dans laquelle on pourra mettre
		// tout ce dont on a besoin de faire une fois la vue affichée 
		self.onAnimateIn();

	});
};
Room.prototype.hide = function(callback) {
	// unbind
	this.unbind();
	
	this.domElem.fadeOut(function(){
		callback();
	});
};
Room.prototype.unbind = function() {

	this.nextButton.off('click',$.proxy(this.onNextButtonClick, this));
	this.prevButton.off('click',$.proxy(this.onPrevButtonClick, this));

	this.trailerCta.off('click',$.proxy(this.onTrailerCtaClick, this));
	this.synopsisCta.off('click',$.proxy(this.onSynopsisCtaClick, this));
	this.bookingCta.off('click',$.proxy(this.onBookingCtaClick, this));

	this.cross.off('click',$.proxy(this.closeTrailer, this));
	this.play.off('click',$.proxy(this.playPause, this));

	$(window).off('keydown',$.proxy(this.onKeyDown, this));

	$(window).off('mousemove', $.proxy(this.onMouseMove, this));
	this.videoFg.off('timeupdate',$.proxy(this.timeUpdate, this));
	this.videoFg.off('ended',$.proxy(this.closeTrailer, this));
};
Room.prototype.bind = function() {

	// click : CTA
	this.trailerCta.on('click',$.proxy(this.onTrailerCtaClick, this));
	this.synopsisCta.on('click',$.proxy(this.onSynopsisCtaClick, this));
	this.bookingCta.on('click',$.proxy(this.onBookingCtaClick, this));

	// click : changer de vue
	this.nextButton.on('click',$.proxy(this.onNextButtonClick, this));
	this.prevButton.on('click',$.proxy(this.onPrevButtonClick, this));

	// Play/Pause
	this.cross.on('click',$.proxy(this.closeTrailer, this));
	this.play.on('click',$.proxy(this.playPause, this));

	// keyboard
	$(window).on('keydown',$.proxy(this.onKeyDown, this));
};
Room.prototype.onTrailerCtaClick = function() {
	var self = this;
	if ( this.domElem.is(':visible') && this.videoBg[0].paused){
		$('.subtitle').fadeOut();
		$('.cta-container').fadeOut();
		$('.title-container').fadeOut(function(){
			$('.progress').show();
			self.cross.show();
			self.videoBg[0].play();
			self.videoFg[0].play();
		});
	}

};
Room.prototype.onSynopsisCtaClick = function() {
	// we'll see
	var synopsis = new Synopsis(this.film);
	synopsis.show();
};
Room.prototype.onBookingCtaClick = function() {
	// we'll see
	alert('Wait For it !');
};
Room.prototype.onNextButtonClick = function() {

	var self = this;
	this.hide(function(){
		self.nextView.show();
	})
};
Room.prototype.onPrevButtonClick = function() {

	var self = this;

	this.hide(function(){
		self.prevView.show();
	})
};
Room.prototype.onKeyDown = function(e) {

	if ( $('.title-container').is(':hidden')){
		if ( e.keyCode == 27 ){			
			this.closeTrailer();			
		}
		if ( e.keyCode == 32 ){
			this.playPause();
		}
	}
};
Room.prototype.playPause = function() {

	if ( this.videoBg[0].paused ){
		$('.square').remove();
		this.videoBg[0].play();
		this.videoFg[0].play();
		this.play.hide();
	} 
	else {				
		this.videoBg[0].pause();
		this.videoFg[0].pause();
		this.play.show();
	}
};
Room.prototype.closeTrailer = function() {
	$('.progress').hide();
	this.cross.hide();
	$('.square').remove();

	this.videoBg[0].pause();
	this.videoFg[0].pause();
	this.play.hide();

	$('.subtitle').fadeIn();
	$('.cta-container').fadeIn();
	$('.title-container').fadeIn();
};

Room.prototype.onAnimateIn = function() {

	$(window).on('mousemove', $.proxy(this.onMouseMove, this));

	this.videoFg.on('timeupdate',$.proxy(this.timeUpdate, this));
	this.videoFg.on('ended',$.proxy(this.closeTrailer, this));
};
Room.prototype.timeUpdate = function() {
	var currentTime = this.videoFg[0].currentTime;
	var duration = this.videoFg[0].duration;
	var percent = currentTime / duration * 100;

	$('.trailer-container .progress').css('width', percent + '%');

	// pour les box sur chaques vidéos
	this.onTimeUpdatePopBox();
};
Room.prototype.onTimeUpdatePopBox = function() {

	var self = this;

	myPopBox = this.popBox;

	$.each(myPopBox, function(key, val){
		if(typeof val != 'undefined' && val.time == Math.floor(self.videoFg[0].currentTime)){
			
			val.axe == 'left' ? val.axe = 'flip' : val.axe = '';

			var newPopBox = '<div style="top:'+val.posY+'%;left:'+val.posX+'%;" class="square '+val.size+' '+val.axe+'"><div class="losange"></div><div class="title">'+val.title+'</div><div class="desc">'+val.desc+'</div></div>';

			// console.log(newPopBox);

			// pour faire la pause qu'une seule fois au cas où il y a pls résultats
			if ( !(self.videoFg[0].paused) ){
				self.playPause();
			}

			$(newPopBox).appendTo($( ".trailer-container" ));

			// évitons les récurrences inutiles...
			myPopBox.splice(key, 1);
		}
	});
};



// PARALLAX
// Notre DOM est composé d'element avec ce type de données
// ex : <div data-axe="x" data-speed="100">
// qui vont nous permettre de personnaliser les comportements
// parallax des différents éléments à l'aide de cette fonction :
Room.prototype.onMouseMove = function(e) {
	
};
var Synopsis = function(filmObj){
	this.title = filmObj.title +' : '+filmObj.subtitle;
	console.log(this.title);
	this.cross = $('#syno .cross');
	// etc ...
}
Synopsis.prototype.init = function() {
	$('.syno-title').text(this.title)
};
Synopsis.prototype.show = function() {

	this.init();

	var self = this;

	$('div.trailer-container').fadeOut('fast');
	$("#syno").animate({width:'toggle'},350,function(){
		self.bind();
		$('#syno .cross').show();
	});
};
Synopsis.prototype.hide = function(callback) {
	this.unbind();
	$("#syno").animate({width:'toggle'},350,function(){
		$('div.trailer-container').fadeIn('fast');
	});
};
Synopsis.prototype.unbind = function() {
	// body...
	this.cross.off('click',$.proxy(this.hide, this));
};
Synopsis.prototype.bind = function() {
	// body...
	this.cross.on('click',$.proxy(this.hide, this));
};
Synopsis.prototype.onTrailerCtaClick = function() {
	// body...
};
Synopsis.prototype.onBookingCtaClick = function() {
	// body...
};


var Booking = function  () {
	this.domElem=$("#");
	this.seat = $(".seat");
	
	//book object ajax
	this.bookInfo = {};
	this.bookInfo.nb = 0;
	this.bookInfo.ids = [];
}

Booking.prototype.show = function() {

	this.bind();
};

Booking.prototype.hide = function() {

	this.unbind();
};

Booking.prototype.bind = function() {

	this.seat.on('click', $.proxy(this.onSeatClick, this));
};
Booking.prototype.onSeatClick = function(e) {

	e.preventDefault();
	
	var seatId = e.target.id;

	console.log(seatId);

	$(e.target).toggleClass('clicked');
	// on prépare un objet BookInfo pour envoyer les données aux serveur plus tard
	if ($(e.target).hasClass('clicked')){
		this.bookInfo.nb += 1;
		this.bookInfo.ids.push(seatId);
	}else{
		this.bookInfo.nb -= 1;
		this.bookInfo.ids.splice(this.bookInfo.ids.indexOf(seatId), 1);
	}
	// console.log("nb : "+ this.bookInfo.nb + " ids : " + this.bookInfo.ids);
};
var Madmax = function  () {

	this.nameView = "madmax";

	this.sourceFg = "assets/trailer/madmax.mp4";
	this.posterFg = "img/madmax/wallpaperFg.jpg";

	this.sourceBg = "assets/trailer/SD/madmax_1.mp4";
	this.posterBg = "img/madmax/wallpaper.jpg";

	this.film = {};
	this.film.title = "MADMAX";
	this.film.subtitle = "Fury Road";

	var popBox =[
		{
			"time"  : 4,
			"size"  : 'big',
			"title" : 'Max',
			"desc"  : 'The hero of the film: Max. a former policeman road solitary in this apocalyptic world',
			"posX"  : 15,
			"posY"  : 30,
			"axe"   : 'left'
		},
		{
			"time"  : 4,
			"size"  : 'small',
			"title" : 'Car carcass ',
			"desc"  : '',
			"posX"  : 70,
			"posY"  : 50,
			"axe"   : 'right'
		},
		{
			"time"  : 4,
			"size"  : 'medium',
			"title" : 'The engine',
			"desc"  : 'A V8 engine salvaged from a wreck ready to be assembled on a war vehicle',
			"posX"  : 80,
			"posY"  : 90,
			"axe"   : 'left',
		},
		{
			"time"  : 17,
			"size"  : 'small',
			"title" : 'Joe marker',
			"desc"  : '',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 17,
			"size"  : 'medium',
			"title" : 'I belive I can fly',
			"desc"  : '',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 26,
			"size"  : 'small',
			"title" : 'The survivor\'s crowd',
			"desc"  : '',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 26,
			"size"  : 'big',
			"title" : 'The War Rigs',
			"desc"  : 'The war rig -> The War Rigs driven furiosa to proces goal for gasoline become vital to society',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 26,
			"size"  : 'big',
			"title" : 'The bad guy',
			"desc"  : 'when you were told that cactus alcohol is very strong. Otherwise the real name of the villain is bad bill',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 32,
			"size"  : 'small',
			"title" : 'Immortan Joe',
			"desc"  : 'Former military Joe weakened by time. he became leader of the citadel',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 35,
			"size"  : 'big',
			"title" : 'Furiosa ',
			"desc"  : 'Furiosa is a immorant Joe’s general.It has betrayed him in order to win his freedom',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 47,
			"size"  : 'small',
			"title" : 'The War Rigs',
			"desc"  : '',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 59,
			"size"  : 'small',
			"title" : 'suicidal',
			"desc"  : '',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},		
		{
			"time"  : 59,
			"size"  : 'medium',
			"title" : 'Max',
			"desc"  : 'Max used as "blood bag" for Nux weakened by disease',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 65,
			"size"  : 'medium',
			"title" : 'The sand storm',
			"desc"  : 'Sand storms are common and often spectacular in the world',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 65,
			"size"  : 'small',
			"title" : 'The Convoy',
			"desc"  : '',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 86,
			"size"  : 'small',
			"title" : 'The Convoy',
			"desc"  : '',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 86,
			"size"  : 'small',
			"title" : 'The horde of Joe',
			"desc"  : '',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 59,
			"size"  : 'medium',
			"title" : 'The bigfoot',
			"desc"  : 'Joe\'s favorite car with a powerful engine and a heavy armament it écrasse everything that stands in front of her',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 59,
			"size"  : 'medium',
			"title" : 'The doof warrior',
			"desc"  : 'The mysterious guitarist punctuating battles with an unleashed metal ',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 59,
			"size"  : 'medium',
			"title" : 'Dodge challenger',
			"desc"  : '',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		}
		
	];
	this.popBox = popBox;

	Room.apply(this, arguments);
}
Madmax.prototype = Object.create(Room.prototype);
var Rango = function  () {

	this.nameView = "rango";

	this.sourceFg = "assets/trailer/rango.mp4";
	this.posterFg = "img/rango/wallpaper.jpg";

	this.sourceBg = "assets/trailer/SD/rango_1.mp4";
	this.posterBg = "img/rango/wallpaper.jpg";

	// requis pour synopsis
	this.film = {};
	this.film.title = "RANGO";
	this.film.subtitle = "La Poursuite De L'Eau";



	var popBox =[
		{
			"time"  : 9,
			"size"  : 'big',
			"title" : 'The nozzle',
			"desc"  : 'The nozzle guided by an animal\'s stomach enjoying the well croistiant dragging lizard in the desert',
			"posX"  : 20+'%',
			"posY"  : 50+'%',
			"axe"   : 'right',
		},
		{
			"time"  : 15,
			"size"  : 'big',
			"title" : 'Rango ',
			"desc"  : 'Rango is a comedian who dreams of becoming someone he will face many dangers before accomplire his dream',
			"posX"  : 80+'%',
			"posY"  : 10+'%',
			"axe"   : 'left',
		},
		{
			"time"  : 24,
			"size"  : 'medium',
			"title" : 'At this moment he knew ',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+'%',
			"axe"   : 'right',
		},
		{
			"time"  : 24,
			"size"  : 'small',
			"title" : 'a liquorice',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+'%',
			"axe"   : 'right',
		},
		{
			"time"  : 38,
			"size"  : 'big',
			"title" : 'Bean',
			"desc"  : 'Bean, desert lizard looking to protect its land from drought',
			"posX"  : 80+'%',
			"posY"  : 10+'%',
			"axe"   : 'right',
		},
		{
			"time"  : 50,
			"size"  : 'big',
			"title" : 'Cactus liquor',
			"desc"  : 'Cactus liquor is very popular in the desert, as strong as a cactus',
			"posX"  : 80+'%',
			"posY"  : 10+'%',
			"axe"   : 'right',
		},
		{
			"time"  : 59,
			"size"  : 'big',
			"title" : 'The bad guy',
			"desc"  : 'when you were told that cactus alcohol is very strong. Otherwise the real name of the villain is bad bill',
			"posX"  : 80+'%',
			"posY"  : 10+'%',
			"axe"   : 'right',
		},
		{
			"time"  : 59,
			"size"  : 'small',
			"title" : 'cactus liquor',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+'%',
			"axe"   : 'right',
		},
		{
			"time"  : 75,
			"size"  : 'big',
			"title" : 'John',
			"desc"  : 'John turtle is the mayor of the town of Dirt and also a businessman heartless',
			"posX"  : 80+'%',
			"posY"  : 10+'%',
			"axe"   : 'right',
		},
		{
			"time"  : 75,
			"size"  : 'small',
			"title" : 'Sherif’s star',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+'%',
			"axe"   : 'right',
		},
		{
			"time"  : 118,
			"size"  : 'big',
			"title" : 'Bad bill',
			"desc"  : 'Bad bill ready to unsheathe it is noted that the area of merry companions is very engaging',
			"posX"  : 80+'%',
			"posY"  : 10+'%',
			"axe"   : 'right',
		},
		{
			"time"  : 118,
			"size"  : 'small',
			"title" : 'a gun',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+'%',
			"axe"   : 'right',
		},
		{
			"time"  : 131,
			"size"  : 'small',
			"title" : 'Rango',
			"desc"  : 'our hero in search of an idea for him to escape from this trap',
			"posX"  : 80+'%',
			"posY"  : 10+'%',
			"axe"   : 'right',
		}

	];
	this.popBox = popBox;

	Room.apply(this, arguments);
}
Rango.prototype = Object.create(Room.prototype);
Rango.prototype.timeUpdate = function() {

	Room.prototype.timeUpdate.call(this);

	// Ajouter des évènements spécifique à cette classe ici :

};
var Starwars = function  () {

	this.nameView = "starwars";

	this.sourceFg = "assets/trailer/starwars.mp4";
	this.posterFg = "img/starwars/wallpaper.jpg";

	this.sourceBg = "assets/trailer/SD/starwars_1.mp4";
	this.posterBg = "img/starwars/wallpaper.jpg";

	this.film = {};
	this.film.title = "STAR WARS VII";
	this.film.subtitle = "The Force Awakens";

	var popBox =[
		{
			"time"  : 13,
			"size"  : 'big',
			"title" : 'BB-8',
			"desc"  : 'BB-8 is a astrodroid. Its round shape allows it to move it easily on all surfaces',
			"posX"  : 20+'%',
			"posY"  : 50+'%',
			"axe"   : 'left'
		},
		{
			"time"  : 13,
			"size"  : 'small',
			"title" : 'The sand dunes of Jakku',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right'
		},
		{
			"time"  : 22,
			"size"  : 'big',
			"title" : 'Rey',
			"desc"  : 'Rey is a looter wreck Jakku living on the planet, is one of the main characters in the series',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 22,
			"size"  : 'small',
			"title" : 'piece of wreckage',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 40,
			"size"  : 'big',
			"title" : 'Finn',
			"desc"  : 'Finn is a stormtrooper fugitive belonging to the first order. It is a main character in the series',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 46,
			"size"  : 'big',
			"title" : 'Kylo Ren',
			"desc"  : 'Kylo Ren is a member of Ren Knight and true worshiper of Darth Vader',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 60,
			"size"  : 'medium',
			"title" : 'The wrecks of ancient war',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 60,
			"size"  : 'medium',
			"title" : 'TIE Fighter',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 60,
			"size"  : 'medium',
			"title" : 'Millénium falcon',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 68,
			"size"  : 'big',
			"title" : 'Han Solo',
			"desc"  : 'Han Solo, the famous smuggler makes his return always accompanied by chewbakka',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 77,
			"size"  : 'small',
			"title" : 'Elite guarde',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 77,
			"size"  : 'medium',
			"title" : 'Kylo Ren light saber',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 88,
			"size"  : 'big',
			"title" : 'Maz Kanata’s castle',
			"desc"  : 'The castle of Maz Kanata is one of the marks of the Mandalorians, the origne the order of the Sith',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 88,
			"size"  : 'medium',
			"title" : 'X-wing',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 93,
			"size"  : 'small',
			"title" : 'Mechanic hand',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 118,
			"size"  : 'big',
			"title" : 'R2-D2',
			"desc"  : 'The famous astrodroid of the saga is back. His cheerful beep beep did not finish to make you laughs',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 118,
			"size"  : 'small',
			"title" : 'Captain Phasma',
			"desc"  : 'Phasma is a captain of stormtrooper. She wears a silver armor, which makes it even more mysterious',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 118,
			"size"  : 'small',
			"title" : 'Silver Armor',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 118,
			"size"  : 'small',
			"title" : 'Stormtrooper',
			"desc"  : 'The first order stormtrooper soldier faithful are always dressed with a white armor and armored',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 118,
			"size"  : 'small',
			"title" : 'Landing ramp',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		}

	];
	this.popBox = popBox;

	Room.apply(this, arguments);
}
Starwars.prototype = Object.create(Room.prototype);