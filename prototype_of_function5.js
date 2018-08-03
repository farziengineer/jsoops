function tst(name){
	this.name = name;
}


var obj1 = new tst("mohit");
var obj2 = new tst("anand");

tst.prototype.bolo = function () {
	console.log('ka re',this.name);
}

// even though we can do the following ,
// it is not recommended to do so
// since here we are changing the blueprint 
// for all the objects through a single, object
// if we have to do it, we can do it through
// the tst.prototype
obj2.__proto__.greet = "hello";
