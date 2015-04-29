## Module_4: Assignment

For this assignment, you're going to fork this repository to your own Github account and clone that repository locally. Inside the repo you'll find a placeholder for app.js, a placeholder trucks.js, and a 'public' directory. Inside the public directory you'll find an index.html file and a client.js file.

1. Initialize your project directory and create a package.json file:
`npm init` Remember that the name is the only part you need to worry about at this time. For everything else, you can add what you like or just hit "enter" and take the default values. Say "yes" when it prompts you and you will have a package.json file in your project directory.

2. Install the express module in your project directory. Because this is now a dependency for your project, have npm write it to the dependencies section of your package.json file: `npm install --save express`

3. You're going to extend the module exported by trucks.js with four additional methods:
`getTrucks()` - this function will return all trucks
`getTruck(name)` - this function will return a single truck object that matches the name passed in.
`getFoodTypes()` - this function will return a list of all the food types that are associated with Food trucks
`filterByFoodType(type)` - this function will return a list of trucks that match the passed-in food type
Because your trucks module now returns more than one function, you'll need it to either export an object with these methods on it, or you'll need to assign the individual functions to methods you define on module.exports.

4. Using app.js, build an express server (refer to the examples of simple express servers in the [slides](http://slides.com/kinakuta/deck-8?token=ttshhrWJ#/26) or visit the [express documentation](http://expressjs.com/)) that implements the following routes:
'/' - this route should return the list of trucks via an ajax call to the "/trucks" endpoint (you can use the provided client.js if you want or you can implement this yourself - the code will be commented out by default.) This means that rather than implementing a get route in your express server application, you serve up the static index.html file found in the public directory. Refer back to the lecture/slides about how to serve static files using a built-in express middle-ware function. 
'/food-types' - this should return a list of food types, in JSON format, corresponding to all the existing food trucks
'/trucks' - this endpoint should return, in JSON format, a list of all the trucks
'/trucks/:name' - this is a dynamic route that should output the following information (in whatever format you wish - styled HTML, JSON, plain text) on the corresponding page: name, food-type, payment methods accepted, description, website, and schedule. If you're using HTML, label each piece of information (e.g. "name: <name>"). If the food truck object is missing that information, just don't output anything for that part.
5. Use a .gitignore file to prevent adding any Node modules you've installed using `npm install` (remember the node_modules is the directory you want to exclude.)
6. EXTRA challenge - **this part is not required**, but is an additional challenge if you want to try it: 
In the index.html file in the public directory, add a link that, when clicked, uses an ajax call to retrieve and display, in another list element you'll need to add, all of the available food types (use the getFoodTypes method you defined on your trucks module.) Make each of those list items a link that goes to a dynamic route: '/food-types/:name' That route should return a list of the trucks that are associated with that food type. 

This assignment is due by Thursday, April 30th by 7pm. Once grading has been completed, a :+1: comment will be added to the pull request and the pull request will be closed.