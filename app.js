//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you 
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks:name'

var express = require('express');
var app = express();

var trucks = require('./trucks');

app.use(express.static('public'));

// return a list of food types available in all trucks
app.get('/food-types', function (request, response) {
	response.json(trucks.truckCalls.getFoodTypes());
});

// return a list of all truck names
app.get('/trucks', function (request, response) {
	response.json(trucks.truckCalls.getTrucks());
})

// return the truck object if name is passed as url
app.get('/trucks/:name', function (request, response) {
    var truck = request.params.name;
    var foodType = trucks[request.params.name];
    response.send(trucks.truckCalls.getTruck(truck));
});
app.listen(3000, function () {
    console.log('listening on port 3000');
});