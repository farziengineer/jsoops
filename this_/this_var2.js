var Con = function() {
	this.poor = 23;

	this.func = function() {
		console.log(this.poor);
	}
}

// the above is a constructor function
// and should be used for the same, 
// constructing objects. We should be careful 
// as to not call it as it might pollute 
// global namespace
// example, 
// this will attach a poor property to
// the global this, and 
// a func function to global func 
Con();

console.log(poor);
func();

