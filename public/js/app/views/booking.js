var Booking = function  (prev) {
	this.seat = $(".sieges");
	this.back = $('.back');

	this.prev = prev;
	
	//book object ajax
	this.bookInfo = {};
	this.bookInfo.nb = 0;
	this.bookInfo.ids = [];
}

Booking.prototype.show = function() {
	$( "#all" ).addClass('booking-bloc');
	$(".booking").fadeIn();
	$(".sieges").css('display','block');

	this.bind();
};

Booking.prototype.hide = function() {

	this.unbind();
	$(".sieges").css('display','none');
	$( "#all" ).removeClass('booking-bloc');
	$(".booking").fadeOut();
	var self = this;
	document.getElementById('scene').className='view-fullscreen scene';
	setTimeout(function(){
			$('#all').fadeOut('slow',function(){
				self.prev.show();
			});
	}, 1300);
	// on remontre l'ancienne page
};
Booking.prototype.unbind = function() {
	this.seat.off('click', $.proxy(this.onSeatClick, this));
	this.back.off('click', $.proxy(this.hide, this));

};
Booking.prototype.bind = function() {

	this.seat.on('click', $.proxy(this.onSeatClick, this));
	this.back.on('click', $.proxy(this.hide, this));
};
Booking.prototype.onSeatClick = function(e) {

	e.preventDefault();

	var theSeat = $(e.target).parents(".sieges");
	var seatId = theSeat[0].id;

	// console.log(seatId);

	$(theSeat).toggleClass('clicked');
	// on prépare un objet BookInfo pour envoyer les données aux serveur plus tard
	if ($(theSeat).hasClass('clicked')){
		this.bookInfo.nb += 1;
		this.bookInfo.ids.push(seatId);
	}else{
		this.bookInfo.nb -= 1;
		this.bookInfo.ids.splice(this.bookInfo.ids.indexOf(seatId), 1);
	}
	// console.log("nb : "+ this.bookInfo.nb + " ids : " + this.bookInfo.ids);
};