var my_car = {
	miles_traveled: 0,
	gas_left: 10,
	miles_per_gallon: 20
};
var drive_car = function(the_car, miles_driven) {
	the_car.miles_traveled = the_car.miles_traveled + miles_driven;
	the_car.gas_left = the_car.gas_left - (miles_driven / the_car.miles_per_gallon);
	if(the_car.gas_left <= 0) {
		alert("You ran out of gas!");
	}
};

drive_car(my_car, 50);
drive_car(my_car, 100);
drive_car(my_car, 200); // I'm out of gas!
