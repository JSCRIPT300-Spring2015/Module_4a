//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you 
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks:name'


var express = require('express');  //require the express module which returns an object/function
var app = express(); //creates and express application instance


var serveStatic = express.static('public');

app.use(serveStatic);

//var pageContent = 'Today is . Here are the available food trucks:';
//when this route handler fires

var trucks = require('./trucks');
var truckObject = trucks();
//var dayTrucks = truckObject.filterByDay(dayName);

app.get('/trucks',function(request,response){
	var truckList = truckObject.getTrucks();
	var nameString = '';
  for(i=0;i<truckList.length;i++){
	nameString = nameString + truckList[i].name + '<br>';
  }
  response.send(nameString);
});



app.get('/trucks/:name',function(request,response){

  //grab the name from the url ex)http://localhost:3000/trucks/TedsTruck gets foodTruck='TedsTruck'
  //name, food-type, payment methods accepted, description, website, and schedule.
  var foodTruckName = request.params.name;
  var foodTruck = truckObject.getTruck(foodTruckName);
  var returnString = '';
  var truckName = foodTruck.name; //string
  var foodType = foodTruck.type; //array
  var payMethod = foodTruck.payment;  //array
  var truckDesc = foodTruck.description; //string
  var truckSite = foodTruck.website; //string
  var truckSchedule = foodTruck.schedule; //array
  
  returnString = 'to be created';
  
  response.send(returnString);
  
});


app.get('/food-types',function(request,response){

  var foodTypes = JSON.parse(truckObject.getFoodTypes());
  var foodString = '';
  for(i=0;i<foodTypes.length;i++){
	foodString = foodString + foodTypes[i] + '<br>';
  }
  response.send(foodString);
});


app.get('/trucksfood/:name',function(request,response){
	var foodName = request.params.name;
  var filteredTrucks = truckObject.filterByFoodType(foodName);
  var nameString = '';
  for(i=0;i<filteredTrucks.length;i++){
	nameString = nameString + filteredTrucks[i].name + '<br>';
  }
  response.send(nameString);
});

app.listen(3000,function(){

 console.log('listening on port 3000');

});


 //now in the browser go to http://localhost:3000 and you'll see the web page