var foodTrucks = [
	{
		name: '314 PIE',
		type: ['Sweet and Savory Pies', 'Pie', 'Sweets'],
		schedule: ['Monday', 'Wednesday', 'Thursday'],
		payment: ['Cash', 'Cards'],
		description: 'We love pies - sweet and savory. We serve them up to the hungry people in Seattle in our fabulous food truck',
		website: 'http://www.314pieseattle.com',
		Facebook: 'https://www.facebook.com/pages/314-PIE/341309415945288',
		Twitter: 'https://twitter.com/314PIESeattle'
	},
	{
		name: 'A Fire Inside Wood Fired Pizza',
		type: ['Pizza'],
		schedule: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		payment: ['Cash', 'Cards'],
		description: 'Neapolitan Thin Crust Wood Fired Pizza',
		Facebook: 'https://www.facebook.com/AFireInsideWoodFiredPizza'
	},
	{
		name: 'Absolut Hot Dog and Gyros',
		type: ['Hot Dogs'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		payment: ['Cash', 'Cards'],
		Facebook: 'https://www.facebook.com/pages/Absolut-HOT-DOG/146715428835785',
		Twitter: 'https://twitter.com/AbsoluteHotDog'
	},
	{
		name: 'Athena\'s',
		type: ['Mediterranean'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		payment: ['Cash', 'Cards'],
		description: 'Delicious Greek Style Street Food',
		website: 'http://feastwiththegods.com/',
		Facebook: 'https://www.facebook.com/Athenasgyros',
		Twitter: 'https://twitter.com/Eatwiththegods'
	},
	{
		name: 'Auto Pompa Pizzeria',
		type: ['Pizza']
	},
	{
		name: 'Bake My Day',
		type: ['Sweets'],
		schedule: ['Wednesday', 'Thursday'],
		payment: ['Cash', 'Cards'],
		description: 'Serving up delicious whoopie pies, cakes, pies, bars, brownies, truffles, and cookies from Bertha Mae, our bakery-on-wheels',
		website: 'http://www.bakemydayseattle.com/',
		Facebook: 'https://www.facebook.com/bakemydayseattle',
		Twitter: 'https://twitter.com/BMDSeattle'
	},
	{
		name: 'Balleywood Creamery',
		type: ['Sweets'],
		schedule: ['Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'],
		payment: ['Cash', 'Cards'],
		description: 'Ice creams and sorbets that are intensely flavored and as locally sourced and seasonal as possible without sacrificing taste or texture. All from a fetching cart.',
		website: 'http://www.balleywoodcreamery.com/',
		Facebook: 'https://www.facebook.com/balleywoodcreamery'
	},
	{
		name: 'Barking Frog Mobile Kitchen',
		type: ['Northwest Cuisine'],
		payment: ['Cash', 'Cards'],
		description: 'Offsite catering from Barking Frog is hitting the road in style to satisfy your Grand Marnier Prawn craving by bringing (your favorite) gourmet eats to the streets!',
		website: 'http://barkingfrogrestaurant.com',
		Facebook: 'https://www.facebook.com/BarkingFrogMobileKitchen',
		Twitter: 'https://twitter.com/BarkingFrogMK'
	},
	{
		name: 'Barriga Llena',
		type: ['Mexican'],
		schedule: ['Monday'],
		payment: ['Cash', 'Cards'],
		description: 'Barriga Llena was the first vendor to introduce traditional Mexican tortas to Seattle, just the way you have them in Mexico City',
		website: 'http://www.labarrigallena.com',
		Facebook: 'https://www.facebook.com/barrigallenaseattle',
		Twitter: 'https://twitter.com/barrigallena'
	},
	{
		name: 'Basil and Javi\'s Fresh Food Now',
		type: ['Vegan Sandwiches', 'Sandwiches']
	},
	{
		name: 'BeanFish',
		type: ['Asian']
	},
	{
		name: 'BeezNeez Gourmet Sausages',
		type: ['Hot Dogs'],
		schedule: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		payment: ['Cash', 'Cards'],
		description: 'Alaskan Reindeer Sausages & other gourmet and exotic Sausages and hotdogs',
		website: 'http://beezneezsausages.com/',
		Facebook: 'https://www.facebook.com/BeezNeezSausageSeattle',
		Twitter: 'https://twitter.com/BeezNeezSeattle'
	},
	{
		name: 'Beloved Mexico',
		type: ['Mexican'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		payment: ['Cash', 'Cards'],
		description: 'Authentic Mexican cuisine made w/ natural, organic ingredients',
		website: 'http://www.belovedmexico.com'
	},
	{
		name: 'Ben & Jerry\'s',
		type: ['Sweets'],
		payment: ['Cash', 'Cards'],
		description: 'Ice Cream Truck (Two trucks, carts and the CowMobile!)',
		website: 'http://www.wabenjerry.com',
		Twitter: 'https://www.twitter.com/wabenjerry'
	},
	{
		name: 'Big Boys Fillipino Food Truck',
		type: ['Fillipino/American', 'Fillipino'],
		payment: ['Cash', 'Cards'],
		description: 'Bring people together using their sense of Filipino cuisine in a unique and flavorful way',
		Facebook: 'https://www.facebook.com/bigboysfilipinofoodtruck',
		Twitter: 'https://twitter.com/NateVibez'
	},
	{
		name: 'Big Dog\'s',
		type: ['Hot Dogs'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		payment: ['Cash', 'Cards'],
		description: 'Biggest Weiner Around!',
		Facebook: 'https://www.facebook.com/BigDogsTacos',
		Twitter: 'https://twitter.com/BigDogBuzz'
	},
	{
		name: 'Big Ed\'s Good Eats',
		type: ['Sandwiches'],
		payment: ['Cash', 'Cards'],
		description: 'Steak sandwiches, burgers, pulled pork, beignets, quesadillas, nachos',
		Facebook: 'https://www.facebook.com/BigEdsGoodEats'
	},
	{
		name: 'Big House BBQ',
		type: ['BBQ'],
		description: 'All of Big House BBQ\'s meats are slow smoked using seasoned apple wood, and alter from the Great Northwest because LOW and SLOW is the only way to go.',
		website: 'http://www.bighousebbq.net'
	},
	{
		name: 'Big Spoon',
		type: ['Sweets'],
		schedule: ['Monday', 'Tuesday'],
		payment: ['Cash', 'Cards'],
		description: 'Hand made ice cream, ice cream sandwiches, and floats in the summer, hearty soups and stews in the cold, rainy months',
		website: 'http://bigspoonseattle.com',
		Facebook: 'https://www.facebook.com/pages/Big-Spoon/458061400937758',
		Twitter: 'https://twitter.com/bigspoonseattle'
	},
	{
		name: 'Bikelava',
		type: ['Sweets'],
		schedule: ['Thursday'],
		payment: ['Cash'],
		description: 'Traditional baklava served from a cute little bike cart',
		Facebook: 'https://www.facebook.com/pages/Bikelava-Artisan-Peddled-Baklava/246842835435535'
	},
	{
		name: 'Bing of Fire',
		type: ['Chinese Crepes'],
		schedule: ['Tuesday'],
		payment: ['Cash', 'Cards'],
		description: 'Chinese crepes, also known at jiangbing are a delicious traditional Chinese street snack',
		website: 'http://www.bingoffire.com',
		Facebook: 'https://www.facebook.com/pages/Bing-of-Fire/502888773079831',
		Twitter: 'https://twitter.com/BingofFire'
	},
	{
		name: 'Biscuit Box',
		type: ['Sandwiches/Breakfast', 'Sandwiches', 'Breakfast'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		payment: ['Cards'],
		description: 'Sweet and Savory smothered biscuits made with local and seasonal ingredients',
		website: 'http://www.mobilemavensseattle.com/',
		Facebook: 'https://www.facebook.com/BiscuitBoxSEA',
		Twitter: 'https://twitter.com/BiscuitBoxSEA'
	},
	{
		name: 'Bite Me Cupcakes',
		type: ['Dessert'],
		payment: ['Cash', 'Cards'],
		description: 'Cupcakes, Gelato and Pastry Truck serving curbside throughout King, Snohomish, Skagit Counties in Wa.',
		website: 'http://www.Bitemecupcakes.us',
		Facebook: 'https://www.facebook.com/pages/Bite-Me-Cupcakes-Eatery/210398125665053'
	},
	{
		name: 'Bomba Fusion',
		type: ['Korean/Mexican Fusion'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		payment: ['Cash', 'Cards'],
		website: 'http://bombafusion.com',
		Facebook: 'https://www.facebook.com/bombafusion',
		Twitter: 'https://twitter.com/bombafusion'
	},
	{
		name: 'Bread and Circuses',
		type: ['Gastropub'],
		schedule: ['Monday', 'Wednesday', 'Friday'],
		payment: ['Cash', 'Cards'],
		description: 'Gastropub',
		website: 'http://www.eatbreadandcircuses.com/',
		Facebook: 'https://www.facebook.com/breadandcircusestruck',
		Twitter: 'https://twitter.com/circustruck'
	},
	{
		name: 'Buddha Bruddah',
		type: ['Asian'],
		schedule: ['Monday', 'Tuesday','Wednesday','Thursday', 'Friday'],
		payment: ['Cash', 'Cards'],
		description: 'Gourmet Asian mixed plates',
		website: 'http://www.buddhabruddah.com',
		Facebook: 'https://www.facebook.com/BuddhaBruddah'
	},
	{
		name: 'Budha Bear Bagels',
		type: ['Sandwiches'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
		payment: ['Cash', 'Cards'],
		description: 'Gourmet Bagel Sandwiches',
		Facebook: 'https://www.facebook.com/BudhaBearBagelsCafe',
		Twitter: 'https://twitter.com/BudhaBearBagels'
	},
	{
		name: 'Bumbu Truck',
		type: ['Indonesian'],
		schedule: ['Sunday'],
		payment: ['Cash', 'Cards'],
		description: 'Indonesian Street Food',
		website: 'http://www.bumbutruck.com',
		Facebook: 'https://www.facebook.com/Bumbutruck',
		Twitter: 'https://twitter.com/bumbutruck'
	},
	{
		name: 'BUNS',
		type: ['Burgers'],
		schedule: ['Tuesday', 'Wednesday', 'Friday'],
		payment: ['Cash', 'Cards'],
		description: 'Gourmet burgers made from organic ingredients',
		website: 'http://www.bunsonwheels.com',
		Facebook: 'https://www.facebook.com/bunsburger',
		Twitter: 'https://twitter.com/BunsOnWheels'
	},
	{
		name: 'Cake Mobile',
		type: ['Sweets'],
		description: 'Events and festivals, and parked at their building near the Tacoma Dome before and after concerts and Dome events',
		Facebook: 'https://www.facebook.com/celebritycakestudio'
	},
	{
		name: 'Caravan Crepes',
		type: ['French'],
		schedule: ['Wednesday', 'Thursday', 'Friday'],
		payment: ['Cash', 'Cards'],
		description: 'Sweet and Savory Crepes',
		website: 'http://www.caravanseattle.com',
		Twitter: 'https://twitter.com/caravanseattle'
	},
	{
		name: 'Charlie\'s',
		type: ['Burgers/Cheesesteaks', 'Burgers'],
		schedule: ['Monday', 'Tuesday', 'Wednesday','Thursday'],
		payment: ['Cash', 'Cards'],
		description: 'A fresh take on American diner fare',
		website: 'http://www.charliesbunsnstuff.com',
		Facebook: 'https://www.facebook.com/charliesbuns',
		Twitter: 'https://twitter.com/CharliesBuns'
	},
	{
		name: 'Cheese Wizards',
		type: ['Sandwiches'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		payment: ['Cash', 'Cards', 'Level Up'],
		description: 'Grilled Cheese Magic',
		website: 'http://wizardsofcheese.com',
		Facebook: 'https://www.facebook.com/CheeseWizards',
		Twitter: 'https://twitter.com/CheeseWizards'
	},
	{
		name: 'Chewaya Authentic Moroccan Sanwiches',
		type: ['Moroccan']
	},
	{
		name: 'Chick\'n Fix',
		type: ['American/Fillipino', 'Fillipino'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
		payment: ['Cash', 'Cards'],
		description: 'Serving up delicious chicken treats!',
		website: 'http://www.chicknfix.com',
		Facebook: 'https://www.facebook.com/chickn.fix',
		Twitter: 'https://twitter.com/Chicknfix'
	},
	{
		name: 'Chopstix',
		type: ['Asian Fusion'],
		schedule: ['Tuesday', 'Wednesday', 'Thursday'],
		payment: ['Cash', 'Cards'],
		description: 'Asian Fusion, like the truck\'s name Chopstix. Our specialty is a little twist of Asian cuisine with western cuisine',
		website: 'http://www.chopstixmobile.com',
		Facebook: 'https://www.facebook.com/chopstixmobile',
		Twitter: 'https://twitter.com/ChopstixMobile'
	},
	{
		name: 'Contigo',
		type: ['Mexican'],
		payment: ['Cash', 'Cards'],
		description: 'Modern Mexican - hand made tortillas and gorditas, all gluten-free',
		website: 'http://www.contigoseattle.com',
		Facebook: 'https://www.facebook.com/contigoseattle',
		Twitter: 'https://twitter.com/ContigoSeattle'
	},
	{
		name: 'Convoy Coffee',
		type: ['Coffee'],
		schedule: ['Wednesday', 'Saturday', 'Sunday'],
		payment: ['Cash', 'Cards'],
		description: 'A bike-driven mobile coffee stand bringing manually-brewed specialty coffee to Seattle streets, previously Handlebar Coffee',
		website: 'http://instagram.com/convoycoffee',
		Facebook: 'https://www.facebook.com/convoycoffee',
		Twitter: 'https://twitter.com/convoycoffee'
	},
	{
		name: 'Crisp Creperie',
		type: ['French'],
		schedule: ['Tuesday'],
		payment: ['Cash', 'Cards'],
		description: 'Locally sourced, in-season, top-shelf ingredients in exquisitely crafted crepes',
		website: 'http://www.crispseattle.com',
		Facebook: 'https://www.facebook.com/CrispSeattle',
		Twitter: 'https://twitter.com/CrispSeattle'
	},
	{
		name: 'Curb Jumper Street Eats',
		type: ['Sandwiches/Burgers', 'Sandwiches', 'Burgers'],
		schedule: ['Monday', 'Wednesday'],
		payment: ['Cash', 'Cards'],
		description: 'Gourmet Sliders and Specialty Sandwiches',
		website: 'http://www.curbjumperstreeteats.com',
		Facebook: 'https://www.facebook.com/CurbJumperStreetEats',
		Twitter: 'https://twitter.com/CurbJumper206'
	},
	{
		name: 'Curbside',
		type: ['Vietnamese']
	},
	{
		name: 'Danielle\'s Crepes',
		type: ['French'],
		schedule: ['Tuesday', 'Friday'],
		payment: ['Cash', 'Cards'],
		description: 'Savory and sweet crepes; breakfast, lunch and dinner; hot coffee and espresso drinks',
		website: 'http://cremacreperie.com',
		Facebook: 'https://www.facebook.com/pages/Crema-Creperie-Espresso-Bar/303099846462139'
	},
	{
		name: 'Dante\'s Inferno Dogs',
		type: ['Hot Dogs']
	},
	{
		name: 'Delicatessen Montanti',
		type: ['Sandwiches'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		payment: ['Cash', 'Cards'],
		description: 'East Coast deli sandwiches to die for!',
		website: 'http://montanti.wix.com/delicatessenmontanti',
		Facebook: 'https://www.facebook.com/pages/Delicatessen-Montanti/823352311016462'
	},
	{
		name: 'Diablo Food Truckz',
		type: ['Asian'],
		payment: ['Cash'],
		description: 'Serving yakisoba pan (fried noodle sandwiches)',
		Facebook: 'https://www.facebook.com/DiabloFoodTruckz',
		Twitter: 'https://twitter.com/DiabloFood'
	},
	{
		name: 'Djung on Wheels',
		type: ['Thai'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
		description: 'Family-owned business offering great Thai food',
		Facebook: 'https://www.facebook.com/djungfood'
	},
	{
		name: 'Dog Japon',
		type: ['Hot Dogs'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		payment: ['Cash', 'Cards'],
		description: 'Hot dogs with a Japanese sensibility'
	},
	{
		name: 'Dogfather Catering',
		type: ['Hot dogs', 'sausages', 'wood fired pizza', 'Pizza'],
		payment: ['Cash', 'Cards'],
		description: 'Hot dogs, sausages and wood-fired pizza',
		Facebook: 'https://www.facebook.com/dogfathercatering',
		Twitter: 'https://www.twitter.com/dogfathercater'
	},
	{
		name: 'Don Lucho\'s',
		type: ['Peruvian Sandwiches', 'Sandwiches'],
		payment: ['Cash', 'Cards'],
		description: 'Latin sandwiches',
		website: 'http://www.donluchosinseattle.com',
		Facebook: 'https://www.facebook.com/donluchos206',
		Twitter: 'https://twitter.com/donluchos'
	},
	{
		name: 'El Animal',
		type: ['Cuban and Argentinian', 'Cuban', 'Argentinian'],
		payment: ['Cash', 'Cards'],
		description: 'Cuban and Argentinian sandwiches and food',
		website: 'http://www.elanimalfoodtruck.com',
		Facebook: 'https://www.facebook.com/elanimalfoodtruck'
	},
	{
		name: 'El Cabrito',
		type: ['Mexican'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		payment: ['Cash', 'Cards'],
		description: 'Traditional Oaxacan Mexican'
	},
	{
		name: 'El Camion',
		type: ['Mexican'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'],
		payment: ['Cash'],
		description: 'Bringing you the finest and most authentic of Mexican cuisine',
		website: 'http://www.elcamion.com',
		Twitter: 'https://twitter.com/elcamionseattle'
	},
	{
		name: 'El Sabroso de Seattle',
		type: ['Mexican'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		payment: ['Cash', 'Cards'],
		description: 'Specializing in Gourmet Tortas, Tacos, Tamales (on green banana leaf) and Quesadillas',
		websites: 'http://www.elsabrosodeseattle.com',
		Facebook: 'https://www.facebook.com/elsabrosobeaconhill'
	},
	{
		name: 'Ezell\'s Express',
		type: ['Southern'],
		schedule: ['Thursday', 'Friday', 'Saturday'],
		payment: ['Cash', 'Cards'],
		description: 'Fresh, Good and Fast! Famous fried chicken',
		Facebook: 'https://www.facebook.com/pages/Ezells-Express/119007364918927',
		Twitter: 'https://twitter.com/EzellsExpress1'
	},
	{
		name: 'Falafel Salam',
		type: ['Middle Eastern'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'],
		description: 'Gourmet, authentic falafel & shawarma',
		website: 'http://falafelsalam.com',
		Facebook: 'https://www.facebook.com/FalafelSalam',
		Twitter: 'https://twitter.com/FalafelSalam'
	},
	{
		name: 'Fez',
		type: ['Mediterranean'],
		schedule: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		payment: ['Cash', 'Cards'],
		description: 'Modern Middle eastern street food (and drink)!',
		Facebook: 'https://www.facebook.com/FezOnWheels/info',
		Twitter: 'https://twitter.com/fezonwheels'
	},
	{
		name: 'Flair Taco',
		type: ['Mexican'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		payment: ['Cash'],
		description: 'Regular taco truck in the Fremont neighborhood - open 7 days a week and late night',
		Facebook: 'https://www.facebook.com/pages/Flair-Taco/197832600252403'
	},
	{
		name: 'Frank\'s Franks',
		type: ['Hot Dogs'],
		schedule: ['Monday', 'Sunday'],
		payment: ['Cash', 'Cards'],
		description: 'Gourmet hot dogs, weiners, sausages, hot links and more, contact at 425.761.9447 or franksfranks3@gmail.com',
		Facebook: 'https://www.facebook.com/franksfrankshotdogs'
	},
	{
		name: 'Fruit Chatter Box',
		type: ['Sweets'],
		schedule: ['Sunday'],
		payment: ['Cash', 'Cards'],
		description: 'Fruit Chatter Box provides fresh, seasonal fresh fruit in cups or on a stick at local festivals and street fairs.',
		Facebook: 'https://www.facebook.com/fruitchatterbox',
		Twitter: 'https://twitter.com/fruitchatterbox'
	},
	{
		name: 'Full Tilt Ice Cream',
		type: ['Sweets'],
		payment: ['Cash', 'Cards'],
		description: 'Handmade ice creams!',
		website: 'http://www.fulltilticecream.com',
		Facebook: 'https://www.facebook.com/fulltilticecreams',
		Twitter: 'https://twitter.com/fticecream'
	}
];

// this module should support the following methods:
// getTrucks() - return all trucks
// getTruck(name) - return the truck object matching 'name'
// getFoodTypes() - return unique list of all associated food types (underscore has a function to help)
// filterByDay(day) - return trucks with 'day' in schedule (use your filterByDay function from Module 3 homework)
// filterByFoodType(foodType) - return trucks with associated 'foodType'
var _ = require('underscore')

var getTrucks = function getTrucks(){
	return foodTrucks;
};

var getTruck = function getTruck(name){
	var rightTruck = _.find(foodTrucks, function(name){
		return foodTrucks.name === name;
	});
	return rightTruck;
};

var getFoodTypes = function getFoodTypes(){
	return _.uniq(_.flatten(_.pluck(foodTrucks, 'type')));
	
};

var filterByDay = function filterByDay(day) {
	var todayFoodTrucks = _.filter(foodTrucks, function(truck){
			return _.contains(truck.schedule, day);
		
	});
	return todayFoodTrucks;
};

var filterByFoodType = function filterByFoodType(foodType){
	return _.filter(foodTrucks, function(truck){
		return _.contains(truck.type, foodType);
	});
	
};

module.exports = {
	getTrucks: getTrucks,
	getTruck: getTruck,
	getFoodTypes: getFoodTypes,
	filterByDay: filterByDay,
	filterByFoodType: filterByFoodType
	
}
