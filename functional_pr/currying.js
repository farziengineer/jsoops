function x(arg1){

	function y(arg2){

		console.log(arg1, arg2);
	};

	return y;
}

var y = x('hello');
y('mohit');
y('anand');