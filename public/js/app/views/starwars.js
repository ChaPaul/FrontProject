var Starwars = function  () {
	this.id = "";
	Room.apply(this, arguments);
}
Starwars.prototype = Object.create(Room.prototype);