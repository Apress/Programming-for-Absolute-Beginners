var my_age;

// Prompt for an age and convert it into an integer
my_age = parseInt(prompt("What is your age?"));

if(my_age > 17) { 
	alert("You are old enough to vote!"); 
} else { 
	var years_to_vote; 
	years_to_vote = 18 - my_age; 
	alert("You have " + years_to_vote + 
		" years left before you can vote.");
} 
