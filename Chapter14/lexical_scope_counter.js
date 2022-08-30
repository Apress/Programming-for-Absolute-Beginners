var create_counter = function() {
	var current_val = 0;
	var counter_function = function() {
		current_val = current_val + 1;
		return current_val;
	};
	return counter_function;
};

var mycounter_a = create_counter();
var mycounter_b = create_counter();
var mycounter_c = mycounter_a;

alert(mycounter_a()); // 1
alert(mycounter_a()); // 2
alert(mycounter_a()); // 3
alert(mycounter_b()); // 1
alert(mycounter_a()); // 4
alert(mycounter_b()); // 2
alert(mycounter_c()); // 5
