var Madmax = function  () {

	this.nameView = "madmax";

	this.sourceFg = "assets/trailer/madmax.mp4";
	this.posterFg = "img/madmax/wallpaperFg.jpg";

	this.sourceBg = "assets/trailer/SD/madmax_1.mp4";
	this.posterBg = "img/madmax/wallpaper.jpg";

	this.film = {};
	this.film.title = "MADMAX";
	this.film.subtitle = "Fury Road";

	var popBox =[
		{
			"time"  : 4,
			"size"  : 'big',
			"title" : 'Max',
			"desc"  : 'The hero of the film: Max. a former policeman road solitary in this apocalyptic world',
			"posX"  : 15,
			"posY"  : 30,
			"axe"   : 'left'
		},
		{
			"time"  : 4,
			"size"  : 'small',
			"title" : 'Car carcass ',
			"desc"  : '',
			"posX"  : 70,
			"posY"  : 50,
			"axe"   : 'right'
		},
		{
			"time"  : 4,
			"size"  : 'medium',
			"title" : 'The engine',
			"desc"  : 'A V8 engine salvaged from a wreck ready to be assembled on a war vehicle',
			"posX"  : 80,
			"posY"  : 90,
			"axe"   : 'left',
		},
		{
			"time"  : 17,
			"size"  : 'small',
			"title" : 'Joe marker',
			"desc"  : '',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 17,
			"size"  : 'medium',
			"title" : 'I belive I can fly',
			"desc"  : '',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 26,
			"size"  : 'small',
			"title" : 'The survivor\'s crowd',
			"desc"  : '',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 26,
			"size"  : 'big',
			"title" : 'The War Rigs',
			"desc"  : 'The war rig -> The War Rigs driven furiosa to proces goal for gasoline become vital to society',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 26,
			"size"  : 'big',
			"title" : 'The bad guy',
			"desc"  : 'when you were told that cactus alcohol is very strong. Otherwise the real name of the villain is bad bill',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 32,
			"size"  : 'small',
			"title" : 'Immortan Joe',
			"desc"  : 'Former military Joe weakened by time. he became leader of the citadel',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 35,
			"size"  : 'big',
			"title" : 'Furiosa ',
			"desc"  : 'Furiosa is a immorant Joe’s general.It has betrayed him in order to win his freedom',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 47,
			"size"  : 'small',
			"title" : 'The War Rigs',
			"desc"  : '',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 59,
			"size"  : 'small',
			"title" : 'suicidal',
			"desc"  : '',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},		
		{
			"time"  : 59,
			"size"  : 'medium',
			"title" : 'Max',
			"desc"  : 'Max used as "blood bag" for Nux weakened by disease',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 65,
			"size"  : 'medium',
			"title" : 'The sand storm',
			"desc"  : 'Sand storms are common and often spectacular in the world',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 65,
			"size"  : 'small',
			"title" : 'The Convoy',
			"desc"  : '',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 86,
			"size"  : 'small',
			"title" : 'The Convoy',
			"desc"  : '',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 86,
			"size"  : 'small',
			"title" : 'The horde of Joe',
			"desc"  : '',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 59,
			"size"  : 'medium',
			"title" : 'The bigfoot',
			"desc"  : 'Joe\'s favorite car with a powerful engine and a heavy armament it écrasse everything that stands in front of her',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 59,
			"size"  : 'medium',
			"title" : 'The doof warrior',
			"desc"  : 'The mysterious guitarist punctuating battles with an unleashed metal ',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		},
		{
			"time"  : 59,
			"size"  : 'medium',
			"title" : 'Dodge challenger',
			"desc"  : '',
			"posX"  : 80,
			"posY"  : 10,
			"axe"   : 'right',
		}
		
	];
	this.popBox = popBox;

	Room.apply(this, arguments);
}
Madmax.prototype = Object.create(Room.prototype);