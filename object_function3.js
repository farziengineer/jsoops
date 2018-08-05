// Inheritance 
// https://www.youtube.com/watch?v=Q-sP71DgKK0&list=PLqq-6Pq4lTTaflXUL0v3TSm86nodn0c_u&index=18

function Emp(name, age){

	this.name = name;
	this.age = age;
}

Emp.prototype.get_name = function () {

	console.log(this.name);
}


var emp1 = new Emp("abcd", 123);
emp1.get_name();

function Manager(name, age){
	this.name = name;
	this.age = age;
}

Manager.prototype.__proto__ = Emp.prototype;

var man = new Manager("hello", 98);
man.get_name();