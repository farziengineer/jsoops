// global scope and this

var x = function(){

	this.f_name = "mohit";
	this.l_name = "anand";
	this.logger = function(){

		console.log(this.f_name, this.l_name);
		// throws compilation error
		// console.log(f_name, l_name);
	};
};

var y = new x();
y.logger();

console.log('--------');

var x = function(){

	this.pp = "12";
	this.qq = "43";
	this.func = function(){
		console.log(this.pp, this.qq);
	}
}

// this will attach global window to pp
// since pp is not defined it will take global
// scope

x();
console.log(pp);
console.log(qq);
func();

console.log('--------');

