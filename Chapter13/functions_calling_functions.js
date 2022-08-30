var function_one = function() {
	// Position 1
	function_two();
	// Position 2
	function_three();
	// Position 3
};

var function_two = function() {
	// Position 4
	function_three();
	// Position 5
};

var function_three = function() {
	// Position 6
	alert("Hello");
	// Position 7
};

// Position 8
function_one();
// Position 9
