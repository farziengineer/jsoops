function abc(){

	var p = 12;
	console.log(p);
	console.log(this.p);
	function def(){
		p  = 120;
		this.p = 10000;
	}
	def();

	console.log(p);
	console.log(this.p);
}
abc();
console.log(p);