/*
 * Homework 
 * JSCRIPT300-Spring2015/Module_4a
 * by Diane Zevenbergen
 */

var express = require('express'); 
var trucks = require('./trucks');
var app = express();    

var serveStatic = express.static('public');
app.use(serveStatic);

// The param method will map a placeholder variable to a callback
app.param('name', function (request, response, next) {
    var name = request.params.name;
    var processedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    request.processedName = processedName;
    next();
});

// Return a list of food types, in JSON format
app.get('/food-types', function (request, response) {
    var foodList = trucks.getFoodTypes();
    response.json(foodList);
});

// Return a list of trucks, in JSON format
app.get('/trucks', function (request, response) {
    var truckList = trucks.getTrucks();
     response.send(truckList);  
});

// Return truck object that matches name in URL
app.get('/trucks/:name', function (request, response) {
    var foodTruck = trucks.getTruck(request.processedName);

    var truckDetails = getDetailList(foodTruck);
    
    if (!foodTruck) {
        response.status(404).json("No food truck found that matches '" + request.processedName + "'");
    } else {
        response.send(truckDetails);
    }
});

// Return truck objects that match food type in URL
app.get('/food-types/:name', function (request, response) {
    var trucksArray = trucks.filterByFoodType(request.processedName);

    if (!trucksArray) {
        response.status(404).json('No food truck found with food type "' + request.processedName + '"');
    } else {
        response.send(trucksArray);
    }
});

app.listen(3000, function() {
    console.log('listening on port 3000');
});

// Function builds html for a truck object
function getDetailList(truck) {
    var truckDetails = [];

    truckDetails.push('<h2>' + truck.name + '</h2>');
    if (typeof truck.type !== 'undefined') {
        truckDetails.push('<p>Food type: ' + truck.type.join(", ") + '</p>');
    }
    if (typeof truck.schedule !== 'undefined') {
        truckDetails.push('<p>Days open: ' + truck.schedule.join(", ") + '</p>');
    }
    if (typeof truck.payment !== 'undefined') {
        truckDetails.push('<p>Payment options: ' + truck.payment.join(", ") + '</p>');
    }
    if (typeof truck.description !== 'undefined') {
        truckDetails.push('<p>Payment options: ' + truck.description + '</p>');
    }
    if (typeof truck.website !== 'undefined') {
        truckDetails.push('<p><a href="' + truck.website + '">Visit our website</a></p>');
    }
    if (typeof truck.Facebook !== 'undefined') {
        truckDetails.push('<p><a href="' + truck.Facebook + '">Visit us on Facebook</a></p>');
    }
    if (typeof truck.Twitter !== 'undefined') {
        truckDetails.push('<p><a href="' + truck.Twitter + '">Visit us on Twitter</a></p>');
    }
    
    return truckDetails.join("");
}

//// Did not use
//function makeList(list, key) {
//    var myList = [];
//    for (var i = 0, l = list.length; i < l ; i++ ) {
//        myList.push('<li>' + list[i][key] + '</li>');
//    }
//    return myList.join("");
//}
