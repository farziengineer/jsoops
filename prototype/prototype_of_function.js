function employee(first_name, last_name, gender, salary) {
	
	this.first_name = first_name;
	this.last_name = last_name;
	this.gender = gender;
	this.salary = salary;
	this.sal_increase = function () {
		this.salary = this.salary + 100;
	}
}


// each employee we create will get a copy of its own fun,
// this is different from class based model
// In class based method, each object gets a blueprint of
// the functions
var e1 = new employee("a", "b", "c", 12);
var e2 = new employee("d", "e", "f", 100);

console.log(e1);
console.log(e2);


// so we need an efficient way to create therse
// objects so that the functions are not repeated.
// Whenever we create a function, two objects are
// created by JS engine. 1st is the function object,
// and the second is the prototype object.
// we can access this prototype object by writing fun_name.prototype

function tst(){
	console.log("hey! hello");
}

console.log(tst.prototype);
