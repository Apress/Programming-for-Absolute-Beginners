var sum_range = function(r_start, r_end) {
	var total = 0;
	for(var x = r_start; x <= r_end; x++) {
		total = total + x;
	}
	
	return total;
};

var result = sum_range(3, 7);
alert("The sum of the numbers 3 through 7 is " + result);
