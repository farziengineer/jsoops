function regular(first_name, last_name, gender){

	var new_obj = {} ;
	new_obj.first_name = first_name;
	new_obj.last_name = last_name;
	new_obj.gender = gender;

	return new_obj;
}

var x = regular("mohit", "anand", "male");


// for consturctor_functions it is a convention
// that we need to start the name with capital

function Consturctor_Employee(first_name, last_name, gender) {
	
	this.first_name = first_name;
	this.last_name = last_name;
	this.gender = gender; 
}

var y = new Consturctor_Employee("hello", "bello", "female");

console.log(x) ;
console.log(y );