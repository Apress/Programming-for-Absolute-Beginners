var num = 1; // This holds the next number to add
var sum = 0; // This holds the sum total so far

while(num <= 6) {  // Check if we are done
	// Add the next number to the sum
	sum = sum + num;

	// Go to the next number
	num = num + 1;
} 

alert("The sum of the numbers 1 through 6 is " + sum);

