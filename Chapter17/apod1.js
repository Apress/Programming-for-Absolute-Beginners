fetch("https://api.nasa.gov/planetary/apod?api_key=APIKEY").then(
	(response) => {
		response.json().then((jsonval) => {
			var title = jsonval.title;
			alert("The picture title is " + title);
		});
	}
);