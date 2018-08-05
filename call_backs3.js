var calc = function(arg1, arg2, operation){

	return operation(arg1, arg2);
};

// we can pass function as an object in the
// parameter, since functions are first class
// objects in JS.

console.log(calc(12, 19, function (arg1, arg2){
	return arg1 + arg2;
}));

