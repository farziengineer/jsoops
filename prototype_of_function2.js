function tst(name){
	this.name = name;
}

// console.log(tst.prototype);



// this prototype is an object created and just sits
// unless an object is created from the function
// when an object is created from that function, the object
// gets a property __proto__ which points to the prototype object
// weird !

// https://www.youtube.com/watch?v=z19gt-wslCo&index=12&list=PLqq-6Pq4lTTaflXUL0v3TSm86nodn0c_u
// this video explains with a diagram the diff bw __proto__ and prototype

// see that when we do obj1.__proto__.greet = "lelo", the prototype object is modified
// and you can see it in both obj1 and obj2. 
 

var obj1 = new tst("hello");
obj1.__proto__.greet = "lelo";
console.log(obj1);

var obj2 = new tst("bello");
console.log(obj2);

console.log(tst.prototype);
