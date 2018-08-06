function employee(first_name, last_name, gender, age) {
	
	this.first_name = first_name;
	this.last_name = last_name;
	this.gender = gender;
	this.age = age;
	this.fun = function () {
		this.age = this.age + 1;
	}
}


var emp = new employee("mohit", 'anand', "male", 10);
emp.fun();
console.log(emp);

function admin(salary){

	this.salary = salary;
}

var mech = new admin(100);
mech.fun = emp.fun ;
// here the context of mech is taken in the `fun`, and 
// when `fun` is executed `mechs` age which is not a property of 
// `mech` is incremented. When we console.log(mech), we see NaN(not a number)
// since undefined  + 1 gives NaN.
mech.fun();

console.log('---------');
console.log(mech);

var x = new employee("as", "ds", "fem", 123);
console.log(x);


// we can use `call` function which specifies the context in which
// the function call is made. 
// here the function fun is called by mech, but with the context of emp
mech.fun.call(emp);
console.log(mech);
console.log(emp);