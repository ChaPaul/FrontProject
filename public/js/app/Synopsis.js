var Synopsis = function(filmObj){
	this.title = filmObj.title +' : '+filmObj.subtitle;
	console.log(this.title);
	this.cross = $('#syno .cross');
	// etc ...
}
Synopsis.prototype.init = function() {
	$('.syno-title').text(this.title)
};
Synopsis.prototype.show = function() {

	this.init();

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

