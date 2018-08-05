poor = "mkmk";

var x = {
    a: 12, 
    b: 123,poor: 231,
    c: function () {
        this.poor = "asssssss";
    }
};



// here the function c() of
// x is called in context of x object
// hence the `this` is `x`. 
x.c();

// the `poor` of `x` object is modified
// the `poor` of global scope is not modified
console.log(x.poor);
console.log(poor);
