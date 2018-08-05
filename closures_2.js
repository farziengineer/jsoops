function abc(){

	for(var i = 1;i <= 10; i +=1) ;

	function def(){

		console.log(i);
	}
	return def;
}

var x = abc();
x();

