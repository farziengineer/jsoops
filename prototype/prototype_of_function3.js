function tst(name){
	this.name = name;
}

// simple example of prototype chain

var obj1 = new tst("mohit");
obj1.__proto__.name = "anand";
obj1.__proto__.age = 12;

console.log(obj1);
// when we write obj1.name the js engine first searches the prop
// `name` in the obj1 itself, it finds it and logs it.
console.log(obj1.name);

// when we write obj1.age the js engine finds searches the prop
// `age` in the obj1, then does not find it and goes to lookup
// where __proto__ is pointing, and finds it, and logs it

console.log(obj1.age);
