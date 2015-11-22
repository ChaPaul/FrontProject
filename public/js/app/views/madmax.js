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