function abc(){

	// it will point to global 'po' 
	// global scope
	console.log(po);
}

function def(){

	// it will point to `po` of global scope
	console.log(po);
	var po = 100;
	// `po` of def() scope
	console.log(po);
	abc();
}

// `po` of global scope
po = 500;

def();

