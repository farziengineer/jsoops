
var fun  = function (a, b, c){

	return (this.num) + a + b + c;
}

var obj = {
	num: 10,
};

// call
console.log(fun.call(obj, 8, 2, 1));

// apply
console.log(fun.apply(obj, [8, 2, 1]));

var arr = [1, 2, 5];
console.log(fun.apply(obj, arr));


var obj2 = {
	num: 92
};

var func = fun.bind(obj2);
console.log(func(1,4,6));

