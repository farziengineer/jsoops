var outer = function(){

	var p = 123;
	var inner = function(){
		this.p = 990;
		p = 12393812;
	}
	inner();
	console.log(p);
	console.log(this.p);

};
outer();
console.log(p);
