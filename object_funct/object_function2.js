// https://www.youtube.com/watch?v=djBQMUoc3d8&list=PLqq-6Pq4lTTaflXUL0v3TSm86nodn0c_u&index=17
// the video explains how chaining works.
function Emp(name, age) {

	this.name = name;
	this.age = age;
}

var emp1 = new Emp();

// for Emp there is an object created prototype, and
// this prototype object was created using new Object();
// so this prototype has a __proto__ which points to 
// prototype object of the Object() function.
// Sounds very easy and convenient :p


