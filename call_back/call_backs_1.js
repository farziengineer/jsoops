var x = function() {

	console.log('I am called from inside of a function');
};

var y = function(args) {

	console.log('call a function passed to me');
	args();
}

y(x);

