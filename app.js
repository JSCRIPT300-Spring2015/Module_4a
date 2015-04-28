//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you 
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks:name'
'use strict';
var express = require('express');
var app = express();
var trucks = require('./trucks');

app.use(express.static('public'));

app.get('/trucks', function (request, response) {
  response.json(trucks.getTrucks());
});
// the 'name' parameter will be available on the request.params object
app.get('/trucks/:name', function (request, response) {
  var truck = request.params.name;
  response.json(trucks.getTruck(truck));
});
//All foodtypes
app.get('/food-types', function (request, response) {
  var foodList = trucks.getFoodTypes();
  var foodListHTML = '<h1>All Food Types</h1>';
  foodList.forEach(function (foodType) {
    foodListHTML += '<li><a href="/food-types/' + foodType + '/">' + foodType + '</a></li>';
  });
  response.send(foodListHTML);
});
//Foodtypes filtered by food parameter
app.get('/food-types/:food', function (request, response) {
  var foodType = request.params.food;
  response.json(trucks.filterByFoodType(foodType));
});
app.listen(3000, function () {
  console.log('listening on port 3000');
});