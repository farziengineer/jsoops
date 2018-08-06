var x = function(){

	console.log('using call method', this.f_name, this.l_name);
};

var y = {

	f_name :"Mohit",
	l_name :"Anand",
	func: function(){
		console.log('using object\'s own function', this.f_name, this.l_name);
	}
};

y.func();
x.call(y);