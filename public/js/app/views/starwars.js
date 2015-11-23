var Starwars = function  () {

	this.nameView = "starwars";

	this.sourceFg = "assets/trailer/starwars.mp4";
	this.posterFg = "img/starwars/wallpaper.jpg";

	this.sourceBg = "assets/trailer/SD/starwars_1.mp4";
	this.posterBg = "img/starwars/wallpaper.jpg";

	this.imgLeft = '<img id="coupleImg" class="start-img img-left" src="img/starwars/couple.png" alt="couple">';
	this.imgRight = '<img id="kyloImg" class="start-img img-right flip-img" src="img/starwars/kylo2.png" alt="vilain">';


	this.film = {};
	this.film.title = "STAR WARS VII";
	this.film.subtitle = "The Force Awakens";

		var popBox =[
		{
			"time"  : 14,
			"size"  : 'medium',
			"title" : 'BB-8',
			"desc"  : 'BB-8 is a astrodroid. Its round shape allows it to move it easily on all surfaces',
			"posX"  : 32,
			"posY"  : 73,
			"axe"   : 'right'
		},
		{
			"time"  : 14,
			"size"  : 'small',
			"title" : 'The sand dunes of Jakku',
			"desc"  : '',
			"posX"  : 80,
			"posY"  : 38,
			"axe"   : 'right'
		},
		{
			"time"  : 22,
			"size"  : 'big',
			"title" : 'Rey',
			"desc"  : 'Rey is a looter wreck Jakku living on the planet, is one of the main characters in the series',
			"posX"  : 51,
			"posY"  : 21,
			"axe"   : 'right',
		},
		{
			"time"  : 22,
			"size"  : 'small',
			"title" : 'piece of wreckage',
			"desc"  : '',
			"posX"  : 25,
			"posY"  : 82,
			"axe"   : 'right',
		},
		{
			"time"  : 41,
			"size"  : 'big',
			"title" : 'Finn',
			"desc"  : 'Finn is a stormtrooper fugitive belonging to the first order. It is a main character in the series',
			"posX"  : 64,
			"posY"  : 32,
			"axe"   : 'right',
		},
		{
			"time"  : 46,
			"size"  : 'big',
			"title" : 'Kylo Ren',
			"desc"  : 'Kylo Ren is a member of Ren Knight and true worshiper of Darth Vader',
			"posX"  : 60,
			"posY"  : 28,
			"axe"   : 'right',
		},
		{
			"time"  : 61,
			"size"  : 'small',
			"title" : 'The wrecks of ancient war',
			"desc"  : '',
			"posX"  : 18,
			"posY"  : 77,
			"axe"   : 'right',
		},
		{
			"time"  : 61,
			"size"  : 'small',
			"title" : 'TIE Fighter',
			"desc"  : '',
			"posX"  : 73,
			"posY"  : 37,
			"axe"   : 'right',
		},
		{
			"time"  : 61,
			"size"  : 'small',
			"title" : 'Millénium falcon',
			"desc"  : '',
			"posX"  : 53,
			"posY"  : 39,
			"axe"   : 'right',
		},
		{
			"time"  : 68,
			"size"  : 'big',
			"title" : 'Han Solo',
			"desc"  : 'Han Solo, the famous smuggler makes his return always accompanied by chewbakka',
			"posX"  : 63,
			"posY"  : 35,
			"axe"   : 'right',
		},
		{
			"time"  : 77,
			"size"  : 'small',
			"title" : 'Elite guarde',
			"desc"  : '',
			"posX"  : 23,
			"posY"  : 22,
			"axe"   : 'right',
		},
		{
			"time"  : 77,
			"size"  : 'medium',
			"title" : 'Kylo Ren light saber',
			"desc"  : '',
			"posX"  : 43,
			"posY"  : 73,
			"axe"   : 'right',
		},
		{
			"time"  : 88,
			"size"  : 'medium',
			"title" : 'Maz Kanata’s castle',
			"desc"  : 'The castle of Maz Kanata is one of the marks of the Mandalorians, the origne the order of the Sith',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 88,
			"size"  : 'medium',
			"title" : 'X-wing',
			"desc"  : '',
			"posX"  : 60,
			"posY"  : 63,
			"axe"   : 'right',
		},
		{
			"time"  : 93,
			"size"  : 'small',
			"title" : 'Mechanic hand',
			"desc"  : '',
			"posX"  : 66,
			"posY"  : 35,
			"axe"   : 'right',
		},
		{
			"time"  : 93,
			"size"  : 'medium',
			"title" : 'R2-D2',
			"desc"  : 'The famous astrodroid of the saga is back. His cheerful beep beep did not finish to make you laughs',
			"posX"  : 44,
			"posY"  : 56,
			"axe"   : 'left',
		},
		{
			"time"  : 96,
			"size"  : 'small',
			"title" : 'Captain Phasma',
			"desc"  : 'Phasma is a captain of stormtrooper. She wears a silver armor, which makes it even more mysterious',
			"posX"  : 68,
			"posY"  : 21,
			"axe"   : 'right',
		},
		{
			"time"  : 96,
			"size"  : 'small',
			"title" : 'Silver Armor',
			"desc"  : '',
			"posX"  : 65,
			"posY"  : 82,
			"axe"   : 'right',
		},
		{
			"time"  : 106,
			"size"  : 'medium',
			"title" : 'Stormtrooper',
			"desc"  : 'The first order stormtrooper soldier faithful are always dressed with a white armor and armored',
			"posX"  : 24,
			"posY"  : 16,
			"axe"   : 'right',
		},
		{
			"time"  : 106,
			"size"  : 'small',
			"title" : 'Landing ramp',
			"desc"  : '',
			"posX"  : 53,
			"posY"  : 82,
			"axe"   : 'right',
		}

	];
	
	this.popBox = popBox;

	Room.apply(this, arguments);
}
Starwars.prototype = Object.create(Room.prototype);

Starwars.prototype.show = function() {
	Room.prototype.show.call(this);
};