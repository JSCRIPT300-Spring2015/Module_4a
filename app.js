var express = require('express');
var trucks = require('./trucks');

var app = express();

app.set('port', 3000);
app.use(express.static('public'));

app.get('/trucks', function(request, response) {
	var allTrucks = trucks.getTrucks();
	response.send(allTrucks);
});

app.get('/trucks/:trucks', function(request,response) {
	var truckName = request.params.trucks;
	response.send(trucks.getTruck(truckName)[0]);
});

app.get('/food-types', function(request, response) {
	var foodTypes = {
		foodTypes: trucks.getFoodTypes()
	}
	response.send(foodTypes);
})

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you 
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks:name'