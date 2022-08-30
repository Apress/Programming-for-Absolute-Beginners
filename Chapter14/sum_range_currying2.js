var create_summing_function = function(transformation) {
	var summing_function = function(r_start, r_end) {
		return sum_range_with_transformation(r_start, r_end, transformation);
	};
	return summing_function;
}

var sum_cubes_of_range = create_summing_function(cube_number);

var result_cubes_currying = sum_cubes_of_range(3, 6);
alert("The sum of the cubes (using currying) is " + result_cubes_currying);
