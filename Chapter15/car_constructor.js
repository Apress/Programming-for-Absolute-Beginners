var Car = function(starting_gas) {
	this.miles_traveled = 0;
	this.gas_left = starting_gas;
	this.miles_per_gallon = 20;

	this.drive = function(miles_driven) {
		this.miles_traveled = this.miles_traveled + miles_driven;
		this.gas_left = this.gas_left - (miles_driven / this.miles_per_gallon);
		if(this.gas_left <= 0) {
			alert("You ran out of gas!");
		}
	};
};

var car_with_lots_of_gas = new Car(50);
var car_with_little_gas = new Car(10);

car_with_lots_of_gas.drive(20);
car_with_little_gas.drive(1000000); // Out of gas!
car_with_lots_of_gas.drive(20); // This car still has gas!
