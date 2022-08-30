var cube_number = function(num) {
	return num * num * num;
};

var sum_cubes_of_range = function(r_start, r_end) {
	var total = 0;
	for(var x = r_start; x <= r_end; x++) {
		total = total + cube_number(x);
	}

	return total;
};

var result = sum_cubes_of_range(3, 6);
alert("The sum of the cubes of the values from 3 to 6: " + result);
