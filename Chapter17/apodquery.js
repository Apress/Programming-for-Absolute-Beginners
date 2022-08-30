// Connection points to the API
let endpoint = "https://api.nasa.gov/planetary/apod";
let mykey = "APIKEY";

// Connection points to the web page
let image_elem = document.getElementById("theimage");
let date_element = document.getElementById("dateinput");
let my_button = document.getElementById("thebutton");

var retrieve_picture_for_date = function(the_date) {
	let params = {
		api_key: mykey,
		date: the_date
	};
	let query_string = new URLSearchParams(params).toString();
	let full_url = endpoint + "?" + query_string;
	fetch(full_url).then((response) => {
		response.json().then((jsonval) => {
			image_elem.src = jsonval.url;
		});
	});
};

my_button.onclick = () => {
	let date_value = date_element.value;
	retrieve_picture_for_date(date_value);
};
