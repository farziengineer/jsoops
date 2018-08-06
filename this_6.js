function def(){
	this.p = 132;
}


function abc(){
	this.p = 12;
	this.r = def;
	this.print_all = function(){
		console.log(this.p);
	};
}

var x = new abc();
x.r();
x.print_all();