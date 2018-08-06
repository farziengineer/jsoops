// Object is a global function for creating objects
var obj1 = new Object();

// var obj2 = {} is actually a shortcut
// for the above method, under the hood
// it does the same new Object() call;
// let's verify
var obj2 = { };

// see that obj2.__proto__ also points Object.prototype
console.log(Object.prototype);
console.log(obj1.__proto__);
console.log(obj2.__proto__);
