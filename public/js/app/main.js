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
