var square_a_number = function(num) {
	var value = num * num;
	return value;
};

var sum_squares_for_range = function(range_start, range_end) {
	var sum = 0;
	for(var num = range_start; num <= range_end; num = num + 1) {
		sum = sum + square_a_number(num);
	}
	return sum;
};
alert("The sum of squares between 2 and 5 is " + sum_squares_for_range(2, 5));

