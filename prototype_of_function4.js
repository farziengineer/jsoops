function tst(name){
	this.name = name;
}


var obj1 = new tst("mohit");
var obj2 = new tst("anand");

// function tst has an object prototype 
// we set's prototype's attr bolo to an 
// anonymous function object 
// and then access using the objects created from function tst
// the JS engine first looks for 'bolo' in the object,
// then goes to look where __proto__ is pointing.

tst.prototype.bolo = function () {
	console.log('ka re',this.name);
}

obj1.bolo();
obj2.bolo();