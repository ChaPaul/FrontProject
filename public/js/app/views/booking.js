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