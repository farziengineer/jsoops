function abc(){
	setTimeout(function(){console.log('hello'); }, 3000);

	console.log('already hello');
}

abc();