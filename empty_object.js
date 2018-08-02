// empty obj 

var my_obj = {};

console.log(my_obj) ;

my_obj.foo = "hello" ;
my_obj.bar = "hi" ; 

console.log(my_obj); 

// js is dynamicallly typed remember
my_obj.foo = 12 ;


my_obj = {
	"foo" : "hello" ,
	"shoo" : "doo" ,
	"hi" : 123,

};

console.log(my_obj);


console.log(my_obj.foo);
console.log(my_obj["foo"]);