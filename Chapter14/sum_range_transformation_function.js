var square_number = function(num) {
	return num * num;
};

var cube_number = function(num) {
	return num * num * num;
};

var sum_range_with_transformation = function(r_start, r_end, transformation) {
	var total = 0;
	for(var x = r_start; x <= r_end; x++) {
		total = total + transformation(x);
	}

	return total;
}

var result_squares = sum_range_with_transformation(3, 6, square_number);
var result_cubes = sum_range_with_transformation(3, 6, cube_number);
alert("The sum of the squares of the values from 3 to 6: " + result_squares);
alert("The sum of the cubes of the values from 3 to 6: " + result_cubes);
