var Con = function() {
	var poor = 12;
	this.poor = 23;

	this.func = function() {
		this.poor  = this.poor + 1;
		console.log(this.poor);
	}
}

// here Con() is called in the
// context of obj, so `this` refers to
// obj object. a `poor` property of 
// obj is created by this.poor = 12;
// the var poor made by function Con
// is not modified.
var obj = new Con();
console.log(obj.poor);
obj.func();
