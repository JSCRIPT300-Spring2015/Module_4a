//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you 
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks:name'



'use strict';

var trucks = require('./trucks');

var express = require('express');
var app = express();
var serveStatic = express.static('public');

app.use(serveStatic);

app.get('/', function (request, response) {
  response.redirect('/trucks');
});

 app.get('/trucks', function (request, response) {
  response.json(trucks.getTrucks());
}); 

app.get('/trucks/:name', function (request, response) {     

    var truck = trucks.getTruck(request.params.name);
    
    if(!truck) {
    	response.status(404).json('No truck found for: ' +
    		request.params.name);
    } else {
    	response.send(truck);
    }

});

app.get('/food-types', function (request, response) {     

    var type = trucks.getFoodTypes();
    
    if (!type) {
        response.status(404).json('No food type found for ' + type);
    } else {
        response.json(type);
    }
    

});
app.listen(3000, function() {
	console.log('Listening on port 3000');
});

