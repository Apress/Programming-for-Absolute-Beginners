var sum_range = function(range_start, range_end) {
	var sum = 0;
	for(var num = range_start; num <= range_end; num = num + 1) {
		sum = sum + num;
	}
	return sum;
};

var start_val = parseInt(prompt("Enter the first number"));
var end_val = parseInt(prompt("Enter the last number"));
var result = sum_range(start_val, end_val);
alert("The sum of all of the numbers between " + start_val + " and " + end_val + " is " + result);
