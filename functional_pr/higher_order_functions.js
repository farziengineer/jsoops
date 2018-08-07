// implementing filters 


function filterx(arr, the_filter){

	var filtered = [];
	for(var i = 0; i < arr.length; i +=1){
		if(the_filter(arr[i]) == true){
			filtered.push(arr[i]);
		}
	}

	return filtered;
}

var arr = [1, 2, 3, 4, 5, 7, 12, 123, 54];

var res1 = filterx(arr, function(num){
	return (num%2 === 0);
});

console.log(res1);

console.log('-------');

var res2 = filterx(arr, function(num){
	return (num > 5);
});
console.log(res2);


// another built-in way to do this would be
console.log(arr.filter(function(num){
	return num%2 === 0;
}));