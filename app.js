//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you 
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks:name'


var express = require('express');  //require the express module which returns an object/function
var app = express(); //creates and express application instance


var serveStatic = express.static('public');

app.use(serveStatic);

var pageContent = 'Today is . Here are the available food trucks:';
//when this route handler fires

var trucks = require('./trucks');
var truckObject = trucks();
//var dayTrucks = truckObject.filterByDay(dayName);

app.get('/trucks',function(request,response){
	
 response.send(pageContent);
 
});



app.get('/trucks/:name',function(request,response){

  //grab the name from the url ex)http://localhost:3000/trucks/TedsTruck gets foodTruck='TedsTruck'
  var foodTruckName = request.params.name;
  var foodTruck = truckObject.getTruck(foodTruckName);
  
  response.send('that truck serves '+foodTruck.type);
  
});


app.get('/trucks/foodtypes',function(request,response){
  var foodTypes = truckObject.getFoodTypes();
  
  response.send('hello');
  
});


app.listen(3000,function(){

 console.log('listening on port 3000');

});


 //now in the browser go to http://localhost:3000 and you'll see the web page