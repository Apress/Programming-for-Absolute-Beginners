var create_function = function(x) {
	var new_function = function() {
		return x;
	};

	return new_function;
};

var my_func_a = create_function(12);
var my_func_b = create_function(20);

var my_val_a = my_func_a();
var my_val_b = my_func_b();

alert("The result of calling my_func_a is " + my_val_a);
alert("The result of calling my_func_b is " + my_val_b);
