(function(){

	console.log("hello");
}());


// slight diff syntax than above
(function(){
	console.log("good bye");
})();


// with args
(function(arg1, arg2){
	
	console.log(arg1, arg2);	
}(12, 13));