function create_emp(first_name, last_name, gender) {
	
	this.first_name = first_name;
	this.last_name = last_name;
	this.gender = gender;
}

var x = new create_emp("mohit", "anand", "male");

console.log(x.first_name) ;
