//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you 
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks:name'

var express = require('express');
var app = express();
var trucks = {
	'Athenas': 'Meditteranean', 'Beanfish': 'Asian', 'Marination': 'Hawaaian-Korean'
};
app.use(express.static('public'));

app.get('/trucks/:name', function (request, response) {
	var truck = request.params.name;
	var foodType = trucks[request.params.name];

	// capitalize first letter, make everything else lowercase
	var foodTruck = truck[0].toUpperCase + truck.slice(1).toLowerCase();

	if (!foodType) {
		response.status(404).json('No food type found for ' + truck);
	} else {
		response.send(foodType);
	}
});

app.listen(3000, function () {
	console.log('listening on port 3000');
});
