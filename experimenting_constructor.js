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

