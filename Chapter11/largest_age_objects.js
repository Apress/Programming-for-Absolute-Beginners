var largest_age = function(child_array) {
	var the_largest = 0;
	for(var i = 0; i < child_array.length; i++) {
		var child = child_array[i];
		if(child.age > the_largest) {
			the_largest = child.age;
		}
	}

	return the_largest; 
};

