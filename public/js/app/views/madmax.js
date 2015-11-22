var Madmax = function  () {
	this.id = "";
	Room.apply(this, arguments);
}
Madmax.prototype = Object.create(Room.prototype);