//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you 
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks:name'
var _ = require('underscore');
var express = require('express');
var trucks = require('./trucks');
var app = express();

// to use the "static" middle-ware, we call it from our express object
// this will allow us to serve up static files from "public"
app.use(express.static('public'));

app.get('/trucks', function (req, res) {
	res.json(trucks.getTrucks());
});

app.get('/trucks/:name', function (req, res) {
	var truck = req.params.name;
	var truckInfo = trucks.getTruck(truck);
	// Since some of our data is in arrays, it needs to be cleaned up
	var makeString = function makeString (array) {
		return _.map(array, function (val, ind) {
			if (ind === 0) {
				return val;
			} else {
				return ' ' + val;
			}
		}).toString();
	};
	var truckStringName = '<h1>'+ truckInfo.name + '</h1>';
	var truckString = '';
	// Make sure each property exists, add it to the string if it does
	if (truckInfo.type) {
		truckString += 'Food Type: ' + makeString(truckInfo.type) + '<br>';
	}
	if (truckInfo.payment) {
		truckString += 'Payment Methods: ' + makeString(truckInfo.payment) + '<br>';
	}
	if (truckInfo.description) {
		truckString += 'Description: ' + truckInfo.description + '<br>';
	}
	if (truckInfo.website) {
		truckString += 'Website: <a href="' + truckInfo.website + '">' +
				truckInfo.website + '</a><br>';
	}
	if (truckInfo.schedule) {
		truckString += 'Schedule: ' + makeString(truckInfo.schedule);
	}
	res.send(truckStringName + truckString);
});

app.get('/food-types', function (req, res) {
	res.json(trucks.getFoodTypes());
});

app.get('/food-types/:name', function (req, res) {
	var type = req.params.name;
	var typeTrucks = trucks.filterByFoodType(type);
	var typeStringName = '<h1>' + type + '</h1><br>';
	var typeTruckList = '';

	typeTrucks.forEach(function (truck) {
		typeTruckList += '<li><a href="/trucks/' + truck.name + '/">' + 
				truck.name + '</a></li>';
	});
	res.send(typeStringName + '<ul>' + typeTruckList + '</ul>');
});

app.listen(3000, function () {
	console.log('server started on port 3000');
});
