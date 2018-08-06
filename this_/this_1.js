
var person = {

	f_name: "mohit",
	l_name: "anand",

	logger: function(){
		// prints name of person
		console.log(person.f_name, person.l_name);
		console.log(this.f_name, this.l_name);
		// throws compilation error
		console.log(f_name, l_name);
	}

}

person.logger();


// var func = function(){

// 	this.num = 100;
// 	this.print_val = function(){
// 		console.log(this.num);
// 	};
// }
// // this is attached 
// var x = new func;
// x.print_val();