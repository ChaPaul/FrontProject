var Rango = function  () {

	this.nameView = "rango";

	this.sourceFg = "assets/trailer/rango.mp4";
	this.posterFg = "img/rango/wallpaper.jpg";

	this.imgLeft = '<img id="rangoImg" class="start-img img-left" src="img/rango/rango.png" alt="rango">';
	this.imgRight = '<img id="jackImg" class="start-img img-right" src="img/rango/jack.png" alt="jack">';

	this.sourceBg = "assets/trailer/SD/rango_1.mp4";
	this.posterBg = "img/rango/wallpaper.jpg";

	// requis pour synopsis
	this.film = {};
	this.film.title = "RANGO";
	this.film.subtitle = "La Poursuite De L'Eau";

	this.film.synopsis = "";
	this.film.background = "";

	// box trailer interactif
		var popBox =[
		{
			"time"  : 9,
			"size"  : 'big',
			"title" : 'The nozzle',
			"desc"  : 'The nozzle guided by an animal\'s stomach enjoying the well croistiant dragging lizard in the desert',
			"posX"  : 40,
			"posY"  : 30,
			"axe"   : 'right',
		},
		{
			"time"  : 13,
			"size"  : 'big',
			"title" : 'Rango ',
			"desc"  : 'Rango is a comedian who dreams of becoming someone he will face many dangers before accomplire his dream',
			"posX"  : 29,
			"posY"  : 24,
			"axe"   : 'right',
		},
		{
			"time"  : 25,
			"size"  : 'small',
			"title" : 'At this moment he knew',
			"desc"  : '',
			"posX"  : 57,
			"posY"  : 15,
			"axe"   : 'right',
		},
		{
			"time"  : 38,
			"size"  : 'big',
			"title" : 'Bean',
			"desc"  : 'Bean, desert lizard looking to protect its land from drought',
			"posX"  : 67,
			"posY"  : 49,
			"axe"   : 'right',
		},
		{
			"time"  : 50,
			"size"  : 'medium',
			"title" : 'Cactus liquor',
			"desc"  : 'Cactus liquor is very popular in the desert, as strong as a cactus',
			"posX"  : 14,
			"posY"  : 61,
			"axe"   : 'right',
		},
		{
			"time"  : 59,
			"size"  : 'big',
			"title" : 'The bad guy',
			"desc"  : 'when you were told that cactus alcohol is very strong. Otherwise the real name of the villain is bad bill',
			"posX"  : 25,
			"posY"  : 28,
			"axe"   : 'right',
		},
		{
			"time"  : 59,
			"size"  : 'small',
			"title" : 'cactus liquor',
			"desc"  : '',
			"posX"  : 28,
			"posY"  : 88,
			"axe"   : 'right',
		},
		{
			"time"  : 75,
			"size"  : 'big',
			"title" : 'John',
			"desc"  : 'John turtle is the mayor of the town of Dirt and also a businessman heartless',
			"posX"  : 71,
			"posY"  : 25,
			"axe"   : 'right',
		},
		{
			"time"  : 75,
			"size"  : 'small',
			"title" : 'Sherif’s star',
			"desc"  : '',
			"posX"  : 55,
			"posY"  : 90,
			"axe"   : 'right',
		},
		{
			"time"  : 89,
			"size"  : 'medium',
			"title" : 'Jake',
			"desc"  : 'jake le serpent, le plus grand bandit de la région.il possède une gatling au bout de sa queue',
			"posX"  : 80,
			"posY"  : 15,
			"axe"   : 'right',
		},
		{
			"time"  : 118,
			"size"  : 'big',
			"title" : 'Bad bill',
			"desc"  : 'Bad bill ready to unsheathe it is noted that the area of merry companions is very engaging',
			"posX"  : 51,
			"posY"  : 14,
			"axe"   : 'right',
		},
		{
			"time"  : 118,
			"size"  : 'small',
			"title" : 'a gun',
			"desc"  : '',
			"posX"  : 64,
			"posY"  : 79,
			"axe"   : 'right',
		},
		{
			"time"  : 131,
			"size"  : 'medium',
			"title" : 'Rango',
			"desc"  : 'our hero in search of an idea for him to escape from this trap',
			"posX"  : 17,
			"posY"  : 46,
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