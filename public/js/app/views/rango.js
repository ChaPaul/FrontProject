var Rango = function  () {

	this.nameView = "rango";

	this.sourceFg = "assets/trailer/rango.mp4";
	this.posterFg = "img/rango/wallpaper.jpg";

	this.sourceBg = "assets/trailer/SD/rango_1.mp4";
	this.posterBg = "img/rango/wallpaper.jpg";

	// requis pour synopsis
	this.film = {};
	this.film.title = "RANGO";
	this.film.subtitle = "La Poursuite De L'Eau";



	var popBox =[
		{
			"time"  : 9,
			"size"  : 'big',
			"title" : 'The nozzle',
			"desc"  : 'The nozzle guided by an animal\'s stomach enjoying the well croistiant dragging lizard in the desert',
			"posX"  : 20+'%',
			"posY"  : 50+'%',
			"axe"   : 'right',
		},
		{
			"time"  : 15,
			"size"  : 'big',
			"title" : 'Rango ',
			"desc"  : 'Rango is a comedian who dreams of becoming someone he will face many dangers before accomplire his dream',
			"posX"  : 80+'%',
			"posY"  : 10+'%',
			"axe"   : 'left',
		},
		{
			"time"  : 24,
			"size"  : 'medium',
			"title" : 'At this moment he knew ',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+'%',
			"axe"   : 'right',
		},
		{
			"time"  : 24,
			"size"  : 'small',
			"title" : 'a liquorice',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+'%',
			"axe"   : 'right',
		},
		{
			"time"  : 38,
			"size"  : 'big',
			"title" : 'Bean',
			"desc"  : 'Bean, desert lizard looking to protect its land from drought',
			"posX"  : 80+'%',
			"posY"  : 10+'%',
			"axe"   : 'right',
		},
		{
			"time"  : 50,
			"size"  : 'big',
			"title" : 'Cactus liquor',
			"desc"  : 'Cactus liquor is very popular in the desert, as strong as a cactus',
			"posX"  : 80+'%',
			"posY"  : 10+'%',
			"axe"   : 'right',
		},
		{
			"time"  : 59,
			"size"  : 'big',
			"title" : 'The bad guy',
			"desc"  : 'when you were told that cactus alcohol is very strong. Otherwise the real name of the villain is bad bill',
			"posX"  : 80+'%',
			"posY"  : 10+'%',
			"axe"   : 'right',
		},
		{
			"time"  : 59,
			"size"  : 'small',
			"title" : 'cactus liquor',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+'%',
			"axe"   : 'right',
		},
		{
			"time"  : 75,
			"size"  : 'big',
			"title" : 'John',
			"desc"  : 'John turtle is the mayor of the town of Dirt and also a businessman heartless',
			"posX"  : 80+'%',
			"posY"  : 10+'%',
			"axe"   : 'right',
		},
		{
			"time"  : 75,
			"size"  : 'small',
			"title" : 'Sherif’s star',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+'%',
			"axe"   : 'right',
		},
		{
			"time"  : 118,
			"size"  : 'big',
			"title" : 'Bad bill',
			"desc"  : 'Bad bill ready to unsheathe it is noted that the area of merry companions is very engaging',
			"posX"  : 80+'%',
			"posY"  : 10+'%',
			"axe"   : 'right',
		},
		{
			"time"  : 118,
			"size"  : 'small',
			"title" : 'a gun',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+'%',
			"axe"   : 'right',
		},
		{
			"time"  : 131,
			"size"  : 'small',
			"title" : 'Rango',
			"desc"  : 'our hero in search of an idea for him to escape from this trap',
			"posX"  : 80+'%',
			"posY"  : 10+'%',
			"axe"   : 'right',
		}

	];
	this.popBox = popBox;

	Room.apply(this, arguments);
}
Rango.prototype = Object.create(Room.prototype);
Rango.prototype.timeUpdate = function() {

	Room.prototype.timeUpdate.call(this);

	// Ajouter des évènements spécifique à cette classe ici :

};