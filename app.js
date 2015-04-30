//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you 
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks:name'

var express = require('express');

var app = express();

app.get('/', function(request, response){
	response.send('hello, studwents!');

})

app.listen(3000, function(){
	console.log('lisiting on port 3000')
})
