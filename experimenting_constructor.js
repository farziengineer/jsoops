function regular(first_name, last_name, gender){

	var new_obj = {} ;
	new_obj.first_name = first_name;
	new_obj.last_name = last_name;
	new_obj.gender = gender;

	return new_obj;
}

var x = new regular("mohit", "anand", "male");
console.log(x) ;
var  y = regular("hello", "bello", "female");
console.log(y);

console.log('------------');

// for consturctor_functions it is a convention
// that we need to start the name with capital

function Consturctor_Employee(first_name, last_name, gender) {
	
	this.first_name = first_name;
	this.last_name = last_name;
	this.gender = gender; 
}

// p is undefined, since the function does not return anything, and the new keyword is not used
// the function Consturctor_Employee takes the 'this' of the global context and 
// changes it, 
var p = Consturctor_Employee("abcde", "fghij", "female");
console.log(p) ;
console.log(this.first_name, this.last_name, this.gender);
var z = new Consturctor_Employee("hello", "bello", "female");
console.log(z) ;
