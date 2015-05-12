var express = require('express');
var trucks = require('./trucks');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/trucks', function (request,response) {
	response.send(trucks.getTrucks());
});

app.get('/trucks/:name', function (request,response) {
	var name = request.params.name;
	var truck = trucks.getTruck(name);
	if (truck) {
		response.send(truck);
	} else {
		response.status(404).json('food truck not found: ', name);
	}
})

app.get('/food-types', function (request,response) {
	var types = trucks.getFoodTypes();
	response.send(types);
});

app.get('/food-types/:name', function (request, response) {
	var name = request.params.name;
	var foodTrucks = trucks.filterByFoodType(name);
	if (foodTrucks) {
		response.send(foodTrucks);
	} else {
		response.status(404).json('food type not found:');
	}
})

app.listen(port, function() {
	console.log('listening on port ',port);
})
