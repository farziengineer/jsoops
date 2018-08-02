// ways to create employee object, way_1

var emp1 = {}; 
emp1.firstname = "mohit" ;
emp1.lastname = "anand" ;
emp1.gender = "male" ;

var emp2 = {};
emp2.firstname = "hello" ;
emp2.lastname = "bello" ;
emp2.gender = "male" ;

 // way_2, function creates employees with identical props

function create_employee() {
	
	var new_obj = {} ;
	new_obj.firstname = "mohit" ;
	new_obj.lastname = "anand" ;
	new_obj.gender = "male" ;
	return new_obj;  	
 } 

var emp3 = create_employee() ;


// way_3 function with values of props changing dynamically 

function create_employee1(firstname, lastname, gender) {
	
	var new_obj = {} ;
	new_obj.firstname = firstname;
	new_obj.lastname = lastname;
	new_obj.gender = gender;

	return new_obj; 
}

var emp4 = create_employee1("a", "b", "female");

console.log(emp1);
console.log(emp2);
console.log(emp3);
console.log(emp4);	