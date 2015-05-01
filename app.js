// require the express module returns a function
var express = require('express');

// calling express creates and application instance
var app = express();

var fs = require('fs');

var trucks = require('./trucks');

var port = process.env.PORT || 3020;

// Serve home directory using static pages
var serveStatic = express.static('public');
app.use(serveStatic);

// Lists all food trucks in JSON format.
app.get('/trucks', function(request, response) {
	response.send(trucks.getTrucks());
});

// Get a specific truck and list it's information in JSON format
app.get('/trucks/:name', function(request, response) {
	var name = request.params.name;
	var truck = trucks.getTruck(name);
	
	if(truck.length > 0) {
		response.send(truck);
	} else {
		response.status(404).json('Truck not found');
	}
});

// List all types of food for each food truck in JSON format
app.get('/food-types', function(request, response) {
	response.send(trucks.getFoodTypes());
});

app.listen(port, function () {

	console.log('Listening on port ' + port);
	console.log('Go to http://localhost:' + port + ' to view');

});
