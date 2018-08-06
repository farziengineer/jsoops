var x = {

	f_name: "a",
	l_name: "b",
	print_val: function(){
		console.log(this.f_name, this.l_name);
	}, 

	adder: {

		house_no: 12,

		strt:function(){
			console.log(this.house_no);
		},
	}
};


// here this.house_no is converted to adder.house_no
// now, what if we want to print, the f_name, l_name
// since `this` does no associate itself with
// outer keys(f_name, l_name)
x.adder.strt();
