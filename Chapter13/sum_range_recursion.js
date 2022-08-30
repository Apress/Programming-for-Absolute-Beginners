var sum_range = function(r_start, r_end) {
	// Check for the base case
	if(r_start == r_end) { 
		// Base Case
		return r_start
	} else {
		// Inductive Case
		return r_start + sum_range(r_start + 1, r_end);
	}
};

var result = sum_range(3, 12);
alert("The sum of the numbers between 3 and 12 is " + result);
