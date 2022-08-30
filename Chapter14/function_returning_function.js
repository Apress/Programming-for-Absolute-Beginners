var square_a_number = function(x) {
	return x * x;
};

var get_square_a_number_function = function() {
	return square_a_number;
};

var my_func = get_square_a_number_function();
var result = my_func(5);
alert("The result of calling my_func(5) is " + result);
