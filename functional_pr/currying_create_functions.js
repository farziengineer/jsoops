// https://stackoverflow.com/questions/113780/javascript-curry-what-are-the-practical-applications
// currying is used to generate functions
// In the following example, I will generate 
// functions which convert from one unit of measurement 
// to another

function gener(factor){

	function func(inp){

		return factor * inp;
	};

	return func;
};

var metre_to_centi = gener(100);
console.log(metre_to_centi(12));

var kg_to_gram = gener(1000);
console.log(kg_to_gram(98));

// we can create separate functions for these
// kg_to_gram and metre_to_centi functions, individually
// but this code is modular
