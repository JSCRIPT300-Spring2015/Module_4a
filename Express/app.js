//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you 
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks:name'

var express = require('express');
var app = express();

var trucks = require('./trucks');

var serveStatic = express.static('public') 
app.use(serveStatic);

app.get('/trucks/:name', function (request, response) {     

    var truck = trucks.getTruck(request.params.name);
    
    if(!truck) {
    	response.status(404).json('Sorry, cannot find the truck called ' +
    		request.params.name);
    } else {
    	response.send(truck);
    }

});

app.get('/food-types', function(request, response) {

    var foodTypes = trucks.getFoodTypes()
    if (!foodtypes) {
    	response.status(404).json('No food available.');
    } else {
    	response.send(foodTypes);
    }
});

app.listen(3000, function() {
	console.log('Listening on port 3000');
});

