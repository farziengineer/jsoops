// calling function from object 

var obj = {
	"first_name" : "mohit", 
};

obj.fun = function(){

	console.log(this.first_name);
}
console.log(obj.fun);
obj.fun();


// calling regular function
function test(){
	console.log("hey hello");
}

test();

// calling anonymous funtion from variable

var x = function (){
	console.log("I am called by this variable x");
}

x();