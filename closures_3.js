function abc(increment_by){


	function def(pass){

		console.log(pass + increment_by);
	}

	return def;
}

var x = abc(12);
x(57);