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
