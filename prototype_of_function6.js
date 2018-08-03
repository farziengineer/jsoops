function tst(name){
	this.name = name;
}


var obj1 = new tst("mohit");
console.log(obj1);

// weird way to access tst function
var obj2 = new obj1.__proto__.constructor("anand");
console.log(obj2);

// even more weird, constructor is a function pointing to the function which created
// prototype object, not recommended at all
var obj3 = new tst.prototype.constructor("this is weird");
console.log(obj3);