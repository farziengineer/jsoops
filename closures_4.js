function go(args){

	var counter = 0 ;
	var msg = args ;
	function bo(){
		counter = counter + 1;
		msg = msg + 2;
		args = args + 3;
		console.log(counter, msg, args);
	}

	return bo;
}

// this creates a private variable `counter`, `msg` and `args` for
// `x` , closure is nothing but function with preserved state
// values of variables. 
var x = go(12);
x();
x();
x();

console.log('----------');

var y = go(19);
y();
y();
y();
