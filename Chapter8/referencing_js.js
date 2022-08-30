// This is a program in JavaScript

var person_age_string;
var person_age_number;
var age_in_twenty_years;

person_age_string = prompt("What is your age?");
person_age_number = parseInt(person_age_string);
age_in_twenty_years = person_age_number + 20;

alert("In 20 years you will be " + age_in_twenty_years + 
	" years old");
