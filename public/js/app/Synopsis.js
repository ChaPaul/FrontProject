var Synopsis = function(){
	this.title = this.filmTitle +' : '+this.filmSubtitle;
	this.cross = $('.cross');
	// etc ...
}
Synopsis.prototype.init = function() {

};
Synopsis.prototype.show = function() {

	var self = this;

	$('div.trailer-container').fadeOut('fast');
	$("#syno").animate({width:'toggle'},350,function(){
		self.bind();
		$('#syno .cross').show();
	});
};
Synopsis.prototype.hide = function(callback) {
	this.unbind();
	$("#syno").animate({width:'toggle'},350,function(){
		$('div.trailer-container').fadeIn('fast');
	});
};
Synopsis.prototype.unbind = function() {
	// body...
	this.cross.off('click',$.proxy(this.hide, this));
};
Synopsis.prototype.bind = function() {
	// body...
	this.cross.on('click',$.proxy(this.hide, this));
};
Synopsis.prototype.onTrailerCtaClick = function() {
	// body...
};
Synopsis.prototype.onBookingCtaClick = function() {
	// body...
};

