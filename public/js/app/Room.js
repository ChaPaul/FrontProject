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
	// this.videoBg.autobuffer=true;

	$('.title').text(this.film.title);
	$('.subtitle').text(this.film.subtitle);
};
Room.prototype.show = function() {
	// body...
	this.init();

	this.bind();
	var self = this;

	setTimeout(function(){ 
		$('.fullswitch').css('display','none');
	}, 3000);

	this.domElem.fadeIn('slow',function(){

		// Une fois que le domElem est affiché
		// On appelle une fonction dans laquelle on pourra mettre
		// tout ce dont on a besoin de faire une fois la vue affichée 
		self.onAnimateIn();

	});
};
Room.prototype.hide = function(callback) {
	// unbind
	this.unbind();
	this.removeImg();

	var self = this;
	
	$('.fullswitch').css('display','block');
	
	setTimeout(function(){
		self.domElem.fadeOut(function(){
			callback();
		});
	}, 1200);
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

	// video
	this.videoFg.on('timeupdate',$.proxy(this.timeUpdate, this));
	this.videoFg.on('ended',$.proxy(this.closeTrailer, this));
};
Room.prototype.onTrailerCtaClick = function() {
	var self = this;
	if ( this.domElem.is(':visible') && this.videoBg[0].paused){
		$('.subtitle').fadeOut();
		$('.cta-container').fadeOut();
		this.removeImg();
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
	this.removeImg();

	var synopsis = new Synopsis(this.film);
	synopsis.show();
};
Room.prototype.onBookingCtaClick = function() {
	// we'll see
	this.unbind();
	this.removeImg();

	var self = this;

	this.domElem.fadeOut(function(){
		$('#all').css('display','block');
		setTimeout(function(){
			document.getElementById('scene').className='view-topView scene';
		}, 1000);
		setTimeout(function(){
			var bookingClass = new Booking(self);
			bookingClass.show();
		}, 2000);
	})
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
	this.popImg();

	$('.subtitle').fadeIn();
	$('.cta-container').fadeIn();
	$('.title-container').fadeIn();

};

Room.prototype.removeImg = function() {
	// animation image OUT ...

	// then
	$(".start-img").remove();
};
Room.prototype.popImg = function() {
	// ajout des images
	$(this.imgRight).appendTo($( "body" ));
	$(this.imgLeft).appendTo($( "body" ));
	// animations
};

Room.prototype.onAnimateIn = function() {

	$(window).on('mousemove', $.proxy(this.onMouseMove, this));

	this.popImg();
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