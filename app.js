//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you 
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks:name'

var express = require('express');
var app = express();

var trucks = require('./trucks');

app.use(express.static('public'));

// Return a list of trucks, in JSON format
app.get('/trucks', function (request, response) {
	var truckList = trucks.getTrucks();
	response.send(truckList);
});

// Return a list of food types, in JSON format
app.get('/food-types', function (request, response) {
	var foodTypes = trucks.getFoodTypes();
	response.send(foodTypes);
});

// Return a list of truck names, in JSON format
app.get('/trucks/:name', function (request, response) {
	var truckName = request.params.name;
	var getTruckName = trucks.getTruck(truckName);
	response.send(getTruckName);
});

app.listen(3000, function () {
	console.log('listening on port 3000');
});
