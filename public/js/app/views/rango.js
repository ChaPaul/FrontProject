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