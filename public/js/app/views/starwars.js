var Starwars = function  () {

	this.nameView = "starwars";

	this.sourceFg = "assets/trailer/starwars.mp4";
	this.posterFg = "img/starwars/wallpaper.jpg";

	this.sourceBg = "assets/trailer/SD/starwars_1.mp4";
	this.posterBg = "img/starwars/wallpaper.jpg";

	this.film = {};
	this.film.title = "STAR WARS VII";
	this.film.subtitle = "The Force Awakens";

	var popBox =[
		{
			"time"  : 13,
			"size"  : 'big',
			"title" : 'BB-8',
			"desc"  : 'BB-8 is a astrodroid. Its round shape allows it to move it easily on all surfaces',
			"posX"  : 20+'%',
			"posY"  : 50+'%',
			"axe"   : 'left'
		},
		{
			"time"  : 13,
			"size"  : 'small',
			"title" : 'The sand dunes of Jakku',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right'
		},
		{
			"time"  : 22,
			"size"  : 'big',
			"title" : 'Rey',
			"desc"  : 'Rey is a looter wreck Jakku living on the planet, is one of the main characters in the series',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 22,
			"size"  : 'small',
			"title" : 'piece of wreckage',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 40,
			"size"  : 'big',
			"title" : 'Finn',
			"desc"  : 'Finn is a stormtrooper fugitive belonging to the first order. It is a main character in the series',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 46,
			"size"  : 'big',
			"title" : 'Kylo Ren',
			"desc"  : 'Kylo Ren is a member of Ren Knight and true worshiper of Darth Vader',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 60,
			"size"  : 'medium',
			"title" : 'The wrecks of ancient war',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 60,
			"size"  : 'medium',
			"title" : 'TIE Fighter',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 60,
			"size"  : 'medium',
			"title" : 'Millénium falcon',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 68,
			"size"  : 'big',
			"title" : 'Han Solo',
			"desc"  : 'Han Solo, the famous smuggler makes his return always accompanied by chewbakka',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 77,
			"size"  : 'small',
			"title" : 'Elite guarde',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 77,
			"size"  : 'medium',
			"title" : 'Kylo Ren light saber',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 88,
			"size"  : 'big',
			"title" : 'Maz Kanata’s castle',
			"desc"  : 'The castle of Maz Kanata is one of the marks of the Mandalorians, the origne the order of the Sith',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 88,
			"size"  : 'medium',
			"title" : 'X-wing',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 93,
			"size"  : 'small',
			"title" : 'Mechanic hand',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 118,
			"size"  : 'big',
			"title" : 'R2-D2',
			"desc"  : 'The famous astrodroid of the saga is back. His cheerful beep beep did not finish to make you laughs',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 118,
			"size"  : 'small',
			"title" : 'Captain Phasma',
			"desc"  : 'Phasma is a captain of stormtrooper. She wears a silver armor, which makes it even more mysterious',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 118,
			"size"  : 'small',
			"title" : 'Silver Armor',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 118,
			"size"  : 'small',
			"title" : 'Stormtrooper',
			"desc"  : 'The first order stormtrooper soldier faithful are always dressed with a white armor and armored',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		},
		{
			"time"  : 118,
			"size"  : 'small',
			"title" : 'Landing ramp',
			"desc"  : '',
			"posX"  : 80+'%',
			"posY"  : 10+ '%',
			"axe"   : 'right',
		}

	];
	this.popBox = popBox;

	Room.apply(this, arguments);
}
Starwars.prototype = Object.create(Room.prototype);