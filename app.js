//  in this file create an express application - use the middle-ware built into express
var express = require('express');
var trucks = require('./trucks');
var app = express();

var port = process.env.PORT || 3000;

var serveStatic = express.static('public');
app.use(serveStatic);

var idManager = require('./idManager');

idManager.setIds(trucks.getTrucks());

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/trucks', function (request, response){
        var trucklist = trucks.getTrucks();
        response.json(trucklist);
});

app.get('/trucks/:name', function (request, response) {
        var name = request.params.name;
  
        var truck = trucks.getTruck(name);
        if (truck) {
                response.send(truck);
        } else {
                response.status(404).json('Truck: ' + name + 
' not found.' );
        }
});

app.get('/food-types', function (request, response) {
        var types = trucks.getFoodTypes();
        
        response.send(types);
});        

app.get('/food-types/:name', function (request, response){
        var name = request.params.name;
        var foodTrucks = trucks.filterByFoodType(name);
        if (foodTrucks) {
            response.send(foodTrucks);
        } else {
                response.status(404).json('No ' + name + 
' type food trucks found.' );
        }
});

//app.post('/Trucks', function (request, response){
//        var newTruck = request.body;
//  if (newTruck) {
//      newTruck.read = false;
//      newTruck._id = idManager.getId();
//      Trucks.addTruck(newTruck);
//      response.status(201).json(newTruck);
//  } else {
//          response.status(400).json('There was a problem adding a new truck.');
//  }
//});
//
//app.delete('/trucks/:name', function (request, response) {
//    var id = request.params.name;
//  
//    trucks.removeTruck(name);
//    response.sendStatus(200);
//});

app.listen(port, function () {
    console.log('listening on port 3000');
});

//  to serve up static files from the public directory (index.html and client.js - you 
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks/:name'
