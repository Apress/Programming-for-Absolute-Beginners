var sum_fourth_power_of_range = create_summing_function(function(x) { 
	return x * x * x * x; 
});

var new_result = sum_fourth_power_of_range(3, 6);
alert("The sum of the range raised to the fourth power is " + new_result);
