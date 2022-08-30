var x = 3;
var z = 3;

var myexamplefunc = function() {
	x = 4; // refers to the function-scoped x 
	       // (var is declared later)
	z = 4; // refers to the global z

	let y = 5; // creates a new y
	var x = 5; // declares that x is function-scoped

	if(true) { 
		var x = 6; // just reaffirms the existence of x
		let y = 6; // creates a new y for this block
	}

	// x is 6 and y is 5
	window.alert("x is " + x + " and y is " + y);
}

myexamplefunc();

// x is 3 and z is 4
alert("x is " + x + " and z is " + z);
