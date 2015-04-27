//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you 
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks:name'
'use strict';
var express = require('express');
var trucks = require('./trucks');
var app = express();
app.set('json spaces', 4);

app.use(express.static('public'));


// the param method will map a placeholder variable to a callback
// app.param('name', function (request, response, next) {
//     var truckName = request.params.name;
//     var foodTruck = truckName[0].toUpperCase() + truckName.slice(1).toLowerCase();
//     request.foodTruck = foodTruck;
//     next();
// });

app.get('/', function (request, response){
	response.redirect('/trucks');
});

app.get('/trucks', function (request, response){
	response.json(trucks.getTrucks());
});

app.get('/trucks/:name', function (request, response) {
	var truck = trucks.getTruck(request.params.name)
	if (!truck) {
        response.status(404).json('No food truck found for ' + request.params.name);
    } else {
    	response.json(truck);    	
    }   
});

app.get('/food-types', function (request, response){
	response.json(trucks.getFoodTypes());
});

app.get('/:food-types/:name', function (request, response) {
	var foodTrucks = trucks.filterByFoodType(request.params.name)
	if (!foodTrucks) {
        response.status(404).json('No food truck type found for ' + request.params.name);
    } else {
    	response.json(foodTrucks);
    }   
});

app.listen(3000, function () { console.log('listening on port 3000'); });
