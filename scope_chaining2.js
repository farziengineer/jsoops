
function def(){

	var pp = "123";
	console.log(pp);

	function op() {

		// this changes the pp of 
		// def() scope , and rr of 
		// global scope since there 
		// is no rr in either op, nor def
		pp = "hello";
		rr = "gello";
		console.log(pp);
	}
	op();
	
}

def();
console.log(rr);