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