var multiply_fields = function() {
	var fld1 = document.getElementById("field1");
	var fld2 = document.getElementById("field2");
	var val1 = parseInt(fld1.value);
	var val2 = parseInt(fld2.value);
	var result = val1 * val2;
	var results_span = document.getElementById("results");
	results_span.textContent = result;
};
var btn = document.getElementById("my_button");
btn.onclick = multiply_fields;
