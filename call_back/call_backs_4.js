function filterz(arg1, cool_filter){

	var filtered = [];

	for(var i = 0; i < arg1.length; i +=1){
		if(cool_filter(arg1[i])){
			filtered.push(arg1[i]);
		}
	}

	return filtered;
}

var arg1 = [1, 2, 4, 5, 6,43, 12, 23, 4];
console.log('original array', arg1);


// filtering even numbers
console.log(filterz(arg1, function(arg) {
	if(arg % 2 == 0){
		return true;
	}
	return false;
}));


// filtering numbers greater than 4

console.log(filterz(arg1, function(arg){

	if(arg > 4){
		return true;
	}
	return false;
}));

