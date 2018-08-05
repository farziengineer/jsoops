
function abc(){

	var x = 12;
	function def(){
		x = x + 1;
		console.log(x);
	}

	return def;
}

// both func1 and func2 get
// their own copy (sort of)
// of abc()'s variable `x`.
// so changing `x` in func1()
// wont affect func2()'s copy
// of `x`
var func1 = abc();
var func2 = abc();
func1();
func2();