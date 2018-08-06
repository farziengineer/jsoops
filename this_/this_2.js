


var func = function(){

	this.num = 100;
	this.print_val = function(){
		console.log(this.num);
	};
};
// this is attached to the object which 
// calls it
// here this.num and this.print_val means x.num and x.print_val
// the `this.num` inside console.log of print_val anonymous
// function is still not attached, to x.
var x = new func;
// now x is attached to this.num of console.log()
// so this.num inside console.log(this.num) becomes
// x.num
x.print_val();