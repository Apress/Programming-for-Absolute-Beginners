var counter = 0;
var next_value = function() {
	counter = counter + 1;
	return counter;
}


var first_value = next_value();
var second_value = next_value();
alert("First value: " + first_value);
alert("Second value: " + second_value);
