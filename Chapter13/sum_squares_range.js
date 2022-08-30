var square_number = function(num) {
	var x = num * num;
	return x;
};

var sum_squares_of_range = function(r_start, r_end) {
	var total = 0;
	for(var x = r_start; x <= r_end; x++) {
		total = total + square_number(x);
	}

	return total;
};

var result = sum_squares_of_range(3, 6);
alert("The sum of the squares of the values from 3 to 6: " + result);
