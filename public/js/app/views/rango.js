var Rango = function  () {
	this.id = "";
	Room.apply(this, arguments);
}
Rango.prototype = Object.create(Room.prototype);