//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you 
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks:name'
var express = require('express');
var trucks = require('./trucks');
var app = express();

app.use(express.static('public'));
app.get('/', function (request, response) {
  response.redirect('/trucks');
});

app.get('/trucks', function (request, response) {
  response.json(trucks.getTrucks());
});

app.get('/trucks/:name', function (request, response) {
  response.json(trucks.getTruck(request.params.name));
});

app.get('/food-types', function (request, response) {
  response.json(trucks.getFoodTypes());
});

app.get('/food-types/:name', function (request, response) {
  response.json(trucks.filterByFoodType(request.params.name));
});

app.listen(80, function () {
  console.log('listening on port 80');
});