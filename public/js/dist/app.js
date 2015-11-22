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

	this.cross = $('.cross');
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

	$('.title').text(this.filmTitle);
	$('.subtitle').text(this.filmSubtitle);
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

	$(window).off('keydown',$.proxy(this.onKeyDown, this));

	$(window).off('mousemove', $.proxy(this.onMouseMove, this));
	this.videoFg.off('timeupdate',$.proxy(this.timeUpdate, this));
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
	var synopsis = new Synopsis();
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
			if ( this.videoBg[0].paused ){
				this.videoBg[0].play();
				this.videoFg[0].play();
			} 
			else {				
				this.videoBg[0].pause();
				this.videoFg[0].pause();
			}
		}
	}
};
Room.prototype.closeTrailer = function() {
	$('.progress').hide();
	this.cross.hide();

	var self = this;

	// self.videoFg[0].pause();
	// self.videoBg[0].pause();

	$('.subtitle').fadeIn();
	$('.cta-container').fadeIn();
	$('.title-container').fadeIn(function(){
			self.videoFg[0].pause();
			self.videoBg[0].pause();
	});
};

Room.prototype.onAnimateIn = function() {

	$(window).on('mousemove', $.proxy(this.onMouseMove, this));

	this.videoFg.on('timeupdate',$.proxy(this.timeUpdate, this));
	// this.trailerVideo.on('ended',$.proxy(this.closeTrailer, this));
};
Room.prototype.timeUpdate = function() {
	var currentTime = this.videoFg[0].currentTime;
	var duration = this.videoFg[0].duration;
	var percent = currentTime / duration * 100;

	$('.trailer-container .progress').css('width', percent + '%');
};



// PARALLAX
// Notre DOM est composé d'element avec ce type de données
// ex : <div data-axe="x" data-speed="100">
// qui vont nous permettre de personnaliser les comportements
// parallax des différents éléments à l'aide de cette fonction :
Room.prototype.onMouseMove = function(e) {
	
	$('div[data-axe]').each(function(){
		var elem = $(this);
		var coeff = 100 - elem.data('speed');
    	var x = (this.offsetLeft + this.offsetWidth/2) - e.pageX / coeff;
   		var y = (this.offsetTop + this.offsetTop/2 ) - e.pageY / coeff;
    	elem.offset({ top: y ,left : x });
    	// var x = this.offsetLeft;
		// var y = this.offsetTop;

		// console.log('x : '+ x + 'y :' + y);

		// // à lier au container
		// var centerX = $(window).width()/2;
		// // this.offsetLeft + (this.offsetWidth/2);
		// var centerY = $(window).height()/2;
		// // this.offsetTop + (this.offsetHeight/2);

		// var percentX = (e.pageX*(100+coeff))/$(window).width();
		// var percentY = (e.pageY*(100+coeff))/$(window).height();

		// if( centerX < e.pageX){
		// 	elem[0].offsetLeft = percentX;
		// 	// var x = centerX - e.pageX / coeff;
		// }else if( centerX > e.pageX){
		// 	elem[0].offsetLeft = 100 - percentX;
		// 	// var x = centerX + e.pageX / coeff;
		// }
    	
  		//if( centerY < e.pageY){
		// 	elem[0].offsetTop = 100 - percentY;
		// 	// var y = centerY - e.pageY / coeff;
		// }else if( centerY > e.pageY){
		// 	elem[0].offsetTop = 100 - percentY;
		// 	// var y = centerY + e.pageY / coeff;
		// }

    	
    	// console.log('x" : '+ percentX + 'y" :' + percentY);
	});
};
var Synopsis = function(){
	this.title = this.filmTitle +' : '+this.filmSubtitle;
	this.cross = $('.cross');
	// etc ...
}
Synopsis.prototype.init = function() {

};
Synopsis.prototype.show = function() {

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

	this.filmTitle = "MADMAX";
	this.filmSubtitle = "Fury Road";

	Room.apply(this, arguments);
}
Madmax.prototype = Object.create(Room.prototype);
var Rango = function  () {

	this.nameView = "rango";

	this.sourceFg = "assets/trailer/rango.mp4";
	this.posterFg = "img/rango/wallpaper.jpg";

	this.sourceBg = "assets/trailer/SD/rango_1.mp4";
	this.posterBg = "img/rango/wallpaper.jpg";

	this.filmTitle = "RANGO";
	this.filmSubtitle = "La Poursuite De L'Eau";

	Room.apply(this, arguments);
}
Rango.prototype = Object.create(Room.prototype);
var Starwars = function  () {

	this.nameView = "starwars";

	this.sourceFg = "assets/trailer/starwars.mp4";
	this.posterFg = "img/starwars/wallpaper.jpg";

	this.sourceBg = "assets/trailer/SD/starwars_1.mp4";
	this.posterBg = "img/starwars/wallpaper.jpg";

	this.filmTitle = "STAR WARS VII";
	this.filmSubtitle = "The Force Awakens";

	Room.apply(this, arguments);
}
Starwars.prototype = Object.create(Room.prototype);