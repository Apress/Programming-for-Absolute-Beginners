var my_car = {
	miles_traveled: 0,
	gas_left: 10,
	miles_per_gallon: 20,
	drive: function(miles_driven) {
		this.miles_traveled = this.miles_traveled + miles_driven;
		this.gas_left = this.gas_left - (miles_driven / this.miles_per_gallon);
		if(this.gas_left <= 0) {
			alert("You ran out of gas!");
		}
	}
};
my_car.drive(50);
my_car.drive(100);
my_car.drive(200); // Out of gas!
