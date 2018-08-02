function foo(){

	// `this` is the global object,
	// where `this` points to actually depends
	// on the runtime environment. If you
	// run it in a browser, this will point 
	// to `window`. In Nodejs it points to 
	// `global` .
	console.log(this);
}
foo();

console.log('----------');


// here we are calling function
// in the context of obj, so this will point to 
// obj
var obj = {
	"hey" : "hello"
};

obj.fun = function () {

	console.log(this);
}

obj.fun();
console.log('----------');


function tst(){

	this.first_name = "hello";
	console.log(this);
}

var n_obj = new tst();
console.log(n_obj);
