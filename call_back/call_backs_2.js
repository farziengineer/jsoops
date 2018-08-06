var calc = function(arg1, arg2, operation){

	if(operation === "add"){
		return arg1 + arg2;
	}

	else if(operation === "multiply"){
		return arg1 * arg2;
	}
}


console.log(calc(1, 2, "add")) ;

console.log('-------');

// better way to implement above functionality
// using function callback

var add = function(arg1, arg2){

	return arg1 + arg2;
}

var multiply = function(arg1, arg2){
	return arg1 * arg2 ;
}

var better_calc = function(arg1, arg2, callback){

	return callback(arg1, arg2);
} 

console.log(better_calc(1, 4, add));
console.log(better_calc(2, 5, multiply));