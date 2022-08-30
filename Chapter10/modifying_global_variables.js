var myvar = 3; // Global variable

var my_function = function() {
	myvar = 5; // Writing to a global variable
};

alert("myvar = " + myvar);
my_function();
alert("After calling my_function, myvar = " + myvar); 

