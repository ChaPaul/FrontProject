var App = function(){

	this.pages = {};

	this.init();

};

App.prototype.init = function() {

	this.pages.booking = new Booking();
	this.pages.booking.show();
};

$(document).ready(function(){

	app = new App();

});

// Classe movieRoom
var Room = function  () {
	this.domElem = $('#' + this.id);
}
Room.prototype.show = function() {
	// body...
};
Room.prototype.hide = function() {
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

	var seatId = e.target.attr('id');

	$(e.target).toggleClass('clicked');
	if ($(e.target).hasClass('clicked')){
		this.nb += 1;
		this.bookInfo.ids.push(e.target.attr('id'));
	}else{
		this.nb -= 1;
		this.bookInfo.ids.splice(this.bookInfo.ids.indexOf(seatId), 1);
	}
	console.log("nb : "+ this.nb + " ids "+ this.bookInfo.ids);
};
var Madmax = function  () {
	this.id = "";
	Room.apply(this, arguments);
}
Madmax.prototype = Object.create(Room.prototype);
var Rango = function  () {
	this.id = "";
	Room.apply(this, arguments);
}
Rango.prototype = Object.create(Room.prototype);
var Starwars = function  () {
	this.id = "";
	Room.apply(this, arguments);
}
Starwars.prototype = Object.create(Room.prototype);