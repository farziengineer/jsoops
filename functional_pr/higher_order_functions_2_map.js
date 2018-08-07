// increment each number by x

var arr = [1, 2, 43,  3, 12, 12, 3,2 , 23,1 ,12];
console.log(arr);

// using simple for loops
for(var i = 0; i < arr.length; i +=1){
	arr[i] = arr[i] + 1;
}

console.log(arr);
console.log('--------');

function map_function(arr, the_mapper){

	for(var i = 0; i < arr.length; i +=1){
		arr[i] = the_mapper(arr[i]);
	}
};

// using map_function

map_function(arr, function(num){
	return num + 1;
});
console.log(arr);

// using builtin map
// this does not change the arr itself
// but returns a function whose
// value is changed
var x = arr.map(function(num){
	return num * 10;
});

console.log(x);

// ES6
var x = arr.map((num) => (num * 10));