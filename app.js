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
	response.send(JSON.stringify(truckList));
//	var nameString = '';
 // for(i=0;i<truckList.length;i++){
//	nameString = nameString + truckList[i].name + '<br>';
//  }
 // response.send(nameString);
});



app.get('/trucks/:name',function(request,response){

  //grab the name from the url ex)http://localhost:3000/trucks/TedsTruck gets foodTruck='TedsTruck'
  //name, food-type, payment methods accepted, description, website, and schedule.
  var foodTruckName = request.params.name;
  var foodTruck = truckObject.getTruck(foodTruckName);
  var truckHTML = '';
  var truckName = foodTruck.name; //string
  
  var foodType = foodTruck.type; //array
  var foodString = '';
  if(foodType){
	// build the foodString - taking into account if blank, one entry, or many
	if(foodType.length===0){
		foodString = 'no entry found';
	}else if(foodType.length>0){
		foodString = foodType[0];
		if(foodType.length>1){
			for(i=1;i<foodType.length;i++){
				foodString = foodString + ', ' + foodType[i];
			}
		}
	}
  }else{
	foodString = 'no foodtypes listed';
  }
  
  var payMethod = foodTruck.payment;  //array
  var payString = '';
  if(payMethod){
		// build the payString - taking into account if blank, one entry, or many
		payString = payMethod[0];
		if(payMethod.length>1){
			for(i=1;i<payMethod.length;i++){
				payString = payString + ', ' + payMethod[i];
			}
		}
  }else{
	  payString = 'No payment methods listed.';
  }
 
  var truckDesc = foodTruck.description; //string
  if(truckDesc === undefined){
	  truckDesc = 'No description available.';
  }
  var truckSite = foodTruck.website; //string
  if(truckSite === undefined){
	truckSite = 'No website available.';
  }
  var truckSchedule = foodTruck.schedule; //array
  var schedString = '';
  if(truckSchedule){
      // build the payString - taking into account if blank, one entry, or many
	schedString = truckSchedule[0];
	if(truckSchedule.length>1){
		for(i=1;i<truckSchedule.length;i++){
			schedString = schedString + ', ' + truckSchedule[i];
		}
	}
  }else{
	  schedString = 'No schedule available for this truck.';
  }
  
  truckHTML = '<ul><li>Truck Name: ' + foodTruckName + '</li><li>Foods: ' + foodString + '</li><li>Payments: ' + payString + '</li><li>Description: ' + truckDesc + '</li><li>Website: ' + truckSite + '</li><li>Schedule: ' + schedString + '</li>';
  
  response.send(truckHTML);
  
});


app.get('/food-types',function(request,response){

  var foodTypes = truckObject.getFoodTypes();
 // var foodString = '';
 // for(i=0;i<foodTypes.length;i++){
//	foodString = foodString + foodTypes[i] + '<br>';
 // }
 // response.send(foodString);
 response.send(foodTypes);
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