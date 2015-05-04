//  in this file create an express application - use the middle-ware built into express
var express = require('express');

var express = require('express');
var trucks = require('./trucks');

var idManager = require('./idManager');
idManager.setIds(trucks.getTrucks());

var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var serveStatic = express.static('public');
app.use(serveStatic);

app.get('/trucks', function (request, response){
        var trucklist = trucks.getTrucks();
        response.json(trucklist);
});

app.get('/trucks/:id', function (request, response) {
        var id = request.params.id;
  
        var truck = trucks.getTruck(id);
        if (truck) {
                response.json(truck);
        } else {
                response.status(404).json('Truck not found');
        }
});

app.post('/Trucks', function (request, response){
        var newTruck = request.body;
  if (newTruck) {
      newTruck.read = false;
      newTruck._id = idManager.getId();
      Trucks.addTruck(newTruck);
      response.status(201).json(newTruck);
  } else {
          response.status(400).json('There was a problem adding a new truck.');
  }
});

app.delete('/trucks/:id', function (request, response) {
    var id = request.params.id;
  
    trucks.removeTruck(id);
    response.sendStatus(200);
});

app.listen(8000, function () {
    console.log('listening on port 8000');
});

//  to serve up static files from the public directory (index.html and client.js - you 
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks/:name'
