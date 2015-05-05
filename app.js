//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you 
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks/:name'

var express = require('express');
var trucks = require('./trucks');
var _ = require('underscore');
var app = express();
 
app.use(express.static('public'));

app.get('/', function (request, response) {
    response.redirect('/trucks');
});

app.get('/food-types', function (request, response) {
    response.send(trucks.getFoodTypes());
});

app.get('/trucks', function (request, response) {
    response.json(trucks.getTrucks());
});

app.get('/trucks/:name', function(request, response) {
    truck = trucks.getTruck(request.params.name);

    var truckName = truck.name;
    var truckFood = truck.type;
    var truckPayment = truck.payment;
    var truckDescription = truck.description;
    var truckWebsite = truck.website;
    var truckSchedule = truck.schedule;
    
    var htmlStr = '<ul>';
    
    if(truckName) {
        htmlStr += '<li><b> Name:</b> ' + truckName + ' </li>';
    }
    if(truckFood) {
        htmlStr += '<li><b> Food-Types:</b> ' + truckFood + ' </li>';
    } 
    if(truckPayment) {
        htmlStr += '<li><b> Payment methods accepted:</b> ' + truckPayment + ' </li>';
    }
    if(truckDescription) {
        htmlStr += '<li><b> Description:</b> ' + truckDescription + ' </li>';
    }
    if(truckWebsite) {
        htmlStr += '<li><b> Website:</b> <a href="' + truckWebsite + '/">' + truckWebsite + '</a> </li>';
    }    
    if(truckSchedule) {
        htmlStr += '<li><b> Open Days:</b> ' + truckSchedule + ' </li>';
    }
    htmlStr += '</ul>';
    
    response.send(htmlStr);
});

app.get('/food-types/:name', function(request, response) {
    truckObjs = trucks.filterByFoodType(request.params.name);
    
    var truckList = '<ul>';
    truckObjs.forEach(function (truck) {
 			truckList += '<li>' + truck.name + '</li>';
    });
    truckList += '</ul>';
    response.send(truckList);
});

    
app.listen(3000, function () { 
    console.log('listening on port 3000'); 
});
































