var myvar = 3; // Global variable

var my_function = function() {
	var myvar = 5; // This version of myvar is now *local*
};

alert("myvar = " + myvar);
my_function();
alert("After calling my_function, myvar = " + myvar); 

