//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you 
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks/:name'

var express = require('express');
var app = express();
var foodTrucks = require('./trucks');

app.use(express.static('public'));

app.get('/', function (request, response) {
    response.redirect('/foodTrucks');
});

app.get('/trucks/:name', function (request, response) {
    var truck = foodTrucks.getTruck(request.params.name);
    response.send(truck);
    //resonse.redirect('/food-trucks');
    //response.send(truck);
    //var foodType = foodTrucks[request.params.name];
    
    //if (!foodType) {
     //   response.status(404).json('No food type found for ' + request.params.name);
   // } else {
   //     response.send(foodType);
   // }
});


app.listen(3000, function () {
    console.log('...listening on port 3000...');
});