var foodTrucks = [
	{
		_id: 0,
        name: '314 PIE',
		type: ['Sweet and Savory Pies', 'Pie', 'Sweets'],
		schedule: ['Monday', 'Wednesday', 'Thursday'],
		payment: ['Cash', 'Cards'],
		description: 'We love pies - sweet and savory. We serve them up to the hungry people in Seattle in our fabulous food truck',
		website: 'http://www.314pieseattle.com',
		Facebook: 'https://www.facebook.com/pages/314-PIE/341309415945288',
		Twitter: 'https://twitter.com/314PIESeattle',
        read: false
	},
	{
		_id: 1,
        name: 'A Fire Inside Wood Fired Pizza',
		type: ['Pizza'],
		schedule: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		payment: ['Cash', 'Cards'],
		description: 'Neapolitan Thin Crust Wood Fired Pizza',
		Facebook: 'https://www.facebook.com/AFireInsideWoodFiredPizza',
        read: false
	},
	{
		_id: 2,
        name: 'Absolut Hot Dog and Gyros',
		type: ['Hot Dogs'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		payment: ['Cash', 'Cards'],
		Facebook: 'https://www.facebook.com/pages/Absolut-HOT-DOG/146715428835785',
		Twitter: 'https://twitter.com/AbsoluteHotDog',
        read: false
	},
	{
		_id: 3,
        name: 'Athena\'s',
		type: ['Mediterranean'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		payment: ['Cash', 'Cards'],
		description: 'Delicious Greek Style Street Food',
		website: 'http://feastwiththegods.com/',
		Facebook: 'https://www.facebook.com/Athenasgyros',
		Twitter: 'https://twitter.com/Eatwiththegods',
        read: false
	},
	{
		_id: 4,
        name: 'Auto Pompa Pizzeria',
		type: ['Pizza'],
        read: false
	},
	{
		_id: 5,
        name: 'Bake My Day',
		type: ['Sweets'],
		schedule: ['Wednesday', 'Thursday'],
		payment: ['Cash', 'Cards'],
		description: 'Serving up delicious whoopie pies, cakes, pies, bars, brownies, truffles, and cookies from Bertha Mae, our bakery-on-wheels',
		website: 'http://www.bakemydayseattle.com/',
		Facebook: 'https://www.facebook.com/bakemydayseattle',
		Twitter: 'https://twitter.com/BMDSeattle',
        read: false
	},
	{
		_id: 6,
        name: 'Balleywood Creamery',
		type: ['Sweets'],
		schedule: ['Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'],
		payment: ['Cash', 'Cards'],
		description: 'Ice creams and sorbets that are intensely flavored and as locally sourced and seasonal as possible without sacrificing taste or texture. All from a fetching cart.',
		website: 'http://www.balleywoodcreamery.com/',
		Facebook: 'https://www.facebook.com/balleywoodcreamery',
        read: false
	},
	{
		_id: 7,
        name: 'Barking Frog Mobile Kitchen',
		type: ['Northwest Cuisine'],
		payment: ['Cash', 'Cards'],
		description: 'Offsite catering from Barking Frog is hitting the road in style to satisfy your Grand Marnier Prawn craving by bringing (your favorite) gourmet eats to the streets!',
		website: 'http://barkingfrogrestaurant.com',
		Facebook: 'https://www.facebook.com/BarkingFrogMobileKitchen',
		Twitter: 'https://twitter.com/BarkingFrogMK',
        read: false
	},
	{
		_id: 8,
        name: 'Barriga Llena',
		type: ['Mexican'],
		schedule: ['Monday'],
		payment: ['Cash', 'Cards'],
		description: 'Barriga Llena was the first vendor to introduce traditional Mexican tortas to Seattle, just the way you have them in Mexico City',
		website: 'http://www.labarrigallena.com',
		Facebook: 'https://www.facebook.com/barrigallenaseattle',
		Twitter: 'https://twitter.com/barrigallena',
        read: false
	},
	{
		_id: 9,
        name: 'Basil and Javi\'s Fresh Food Now',
		type: ['Vegan Sandwiches', 'Sandwiches'],
        read: false
	},
	{
		_id: 10,
        name: 'BeanFish',
		type: ['Asian'],
        read: false
	},
	{
		_id: 11,
        name: 'BeezNeez Gourmet Sausages',
		type: ['Hot Dogs'],
		schedule: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		payment: ['Cash', 'Cards'],
		description: 'Alaskan Reindeer Sausages & other gourmet and exotic Sausages and hotdogs',
		website: 'http://beezneezsausages.com/',
		Facebook: 'https://www.facebook.com/BeezNeezSausageSeattle',
		Twitter: 'https://twitter.com/BeezNeezSeattle',
        read: false
	},
	{
		_id: 12,
        name: 'Beloved Mexico',
		type: ['Mexican'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		payment: ['Cash', 'Cards'],
		description: 'Authentic Mexican cuisine made w/ natural, organic ingredients',
		website: 'http://www.belovedmexico.com',
        read: false
	},
	{
		_id: 13,
        name: 'Ben & Jerry\'s',
		type: ['Sweets'],
		payment: ['Cash', 'Cards'],
		description: 'Ice Cream Truck (Two trucks, carts and the CowMobile!)',
		website: 'http://www.wabenjerry.com',
		Twitter: 'https://www.twitter.com/wabenjerry',
        read: false
	},
	{
		_id: 14,
        name: 'Big Boys Fillipino Food Truck',
		type: ['Fillipino/American', 'Fillipino'],
		payment: ['Cash', 'Cards'],
		description: 'Bring people together using their sense of Filipino cuisine in a unique and flavorful way',
		Facebook: 'https://www.facebook.com/bigboysfilipinofoodtruck',
		Twitter: 'https://twitter.com/NateVibez',
        read: false
	},
	{
		_id: 15,
        name: 'Big Dog\'s',
		type: ['Hot Dogs'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		payment: ['Cash', 'Cards'],
		description: 'Biggest Weiner Around!',
		Facebook: 'https://www.facebook.com/BigDogsTacos',
		Twitter: 'https://twitter.com/BigDogBuzz',
        read: false
	},
	{
		_id: 16,
        name: 'Big Ed\'s Good Eats',
		type: ['Sandwiches'],
		payment: ['Cash', 'Cards'],
		description: 'Steak sandwiches, burgers, pulled pork, beignets, quesadillas, nachos',
		Facebook: 'https://www.facebook.com/BigEdsGoodEats',
        read: false
	},
	{
		_id: 17,
        name: 'Big House BBQ',
		type: ['BBQ'],
		description: 'All of Big House BBQ\'s meats are slow smoked using seasoned apple wood, and alter from the Great Northwest because LOW and SLOW is the only way to go.',
		website: 'http://www.bighousebbq.net',
        read: false
	},
	{
		_id: 18,
        name: 'Big Spoon',
		type: ['Sweets'],
		schedule: ['Monday', 'Tuesday'],
		payment: ['Cash', 'Cards'],
		description: 'Hand made ice cream, ice cream sandwiches, and floats in the summer, hearty soups and stews in the cold, rainy months',
		website: 'http://bigspoonseattle.com',
		Facebook: 'https://www.facebook.com/pages/Big-Spoon/458061400937758',
		Twitter: 'https://twitter.com/bigspoonseattle',
        read: false
	},
	{
		_id: 19,
        name: 'Bikelava',
		type: ['Sweets'],
		schedule: ['Thursday'],
		payment: ['Cash'],
		description: 'Traditional baklava served from a cute little bike cart',
		Facebook: 'https://www.facebook.com/pages/Bikelava-Artisan-Peddled-Baklava/246842835435535',
        read: false
	},
	{
		_id: 20,
        name: 'Bing of Fire',
		type: ['Chinese Crepes'],
		schedule: ['Tuesday'],
		payment: ['Cash', 'Cards'],
		description: 'Chinese crepes, also known at jiangbing are a delicious traditional Chinese street snack',
		website: 'http://www.bingoffire.com',
		Facebook: 'https://www.facebook.com/pages/Bing-of-Fire/502888773079831',
		Twitter: 'https://twitter.com/BingofFire',
        read: false
	},
	{
		_id: 21,
        name: 'Biscuit Box',
		type: ['Sandwiches/Breakfast', 'Sandwiches', 'Breakfast'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		payment: ['Cards'],
		description: 'Sweet and Savory smothered biscuits made with local and seasonal ingredients',
		website: 'http://www.mobilemavensseattle.com/',
		Facebook: 'https://www.facebook.com/BiscuitBoxSEA',
		Twitter: 'https://twitter.com/BiscuitBoxSEA',
        read: false
	},
	{
		_id: 22,
        name: 'Bite Me Cupcakes',
		type: ['Dessert'],
		payment: ['Cash', 'Cards'],
		description: 'Cupcakes, Gelato and Pastry Truck serving curbside throughout King, Snohomish, Skagit Counties in Wa.',
		website: 'http://www.Bitemecupcakes.us',
		Facebook: 'https://www.facebook.com/pages/Bite-Me-Cupcakes-Eatery/210398125665053',
        read: false
	},
	{
		_id: 23,
        name: 'Bomba Fusion',
		type: ['Korean/Mexican Fusion'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		payment: ['Cash', 'Cards'],
		website: 'http://bombafusion.com',
		Facebook: 'https://www.facebook.com/bombafusion',
		Twitter: 'https://twitter.com/bombafusion',
        read: false
	},
	{
		_id: 24,
        name: 'Bread and Circuses',
		type: ['Gastropub'],
		schedule: ['Monday', 'Wednesday', 'Friday'],
		payment: ['Cash', 'Cards'],
		description: 'Gastropub',
		website: 'http://www.eatbreadandcircuses.com/',
		Facebook: 'https://www.facebook.com/breadandcircusestruck',
		Twitter: 'https://twitter.com/circustruck',
        read: false
	},
	{
		_id: 25,
        name: 'Buddha Bruddah',
		type: ['Asian'],
		schedule: ['Monday', 'Tuesday','Wednesday','Thursday', 'Friday'],
		payment: ['Cash', 'Cards'],
		description: 'Gourmet Asian mixed plates',
		website: 'http://www.buddhabruddah.com',
		Facebook: 'https://www.facebook.com/BuddhaBruddah',
        read: false
	},
	{
		_id: 26,
        name: 'Budha Bear Bagels',
		type: ['Sandwiches'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
		payment: ['Cash', 'Cards'],
		description: 'Gourmet Bagel Sandwiches',
		Facebook: 'https://www.facebook.com/BudhaBearBagelsCafe',
		Twitter: 'https://twitter.com/BudhaBearBagels',
        read: false
	},
	{
		_id: 27,
        name: 'Bumbu Truck',
		type: ['Indonesian'],
		schedule: ['Sunday'],
		payment: ['Cash', 'Cards'],
		description: 'Indonesian Street Food',
		website: 'http://www.bumbutruck.com',
		Facebook: 'https://www.facebook.com/Bumbutruck',
		Twitter: 'https://twitter.com/bumbutruck',
        read: false
	},
	{
		_id: 28,
        name: 'BUNS',
		type: ['Burgers'],
		schedule: ['Tuesday', 'Wednesday', 'Friday'],
		payment: ['Cash', 'Cards'],
		description: 'Gourmet burgers made from organic ingredients',
		website: 'http://www.bunsonwheels.com',
		Facebook: 'https://www.facebook.com/bunsburger',
		Twitter: 'https://twitter.com/BunsOnWheels',
        read: false
	},
	{
		_id: 29,
        name: 'Cake Mobile',
		type: ['Sweets'],
		description: 'Events and festivals, and parked at their building near the Tacoma Dome before and after concerts and Dome events',
		Facebook: 'https://www.facebook.com/celebritycakestudio',
        read: false
	},
	{
		_id: 30,
        name: 'Caravan Crepes',
		type: ['French'],
		schedule: ['Wednesday', 'Thursday', 'Friday'],
		payment: ['Cash', 'Cards'],
		description: 'Sweet and Savory Crepes',
		website: 'http://www.caravanseattle.com',
		Twitter: 'https://twitter.com/caravanseattle',
        read: false
	},
	{
		_id: 31,
        name: 'Charlie\'s',
		type: ['Burgers/Cheesesteaks', 'Burgers'],
		schedule: ['Monday', 'Tuesday', 'Wednesday','Thursday'],
		payment: ['Cash', 'Cards'],
		description: 'A fresh take on American diner fare',
		website: 'http://www.charliesbunsnstuff.com',
		Facebook: 'https://www.facebook.com/charliesbuns',
		Twitter: 'https://twitter.com/CharliesBuns',
        read: false
	},
	{
		_id: 32,
        name: 'Cheese Wizards',
		type: ['Sandwiches'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		payment: ['Cash', 'Cards', 'Level Up'],
		description: 'Grilled Cheese Magic',
		website: 'http://wizardsofcheese.com',
		Facebook: 'https://www.facebook.com/CheeseWizards',
		Twitter: 'https://twitter.com/CheeseWizards',
        read: false
	},
	{
		_id: 33,
        name: 'Chewaya Authentic Moroccan Sanwiches',
		type: ['Moroccan'],
        read: false
	},
	{
		_id: 34,
        name: 'Chick\'n Fix',
		type: ['American/Fillipino', 'Fillipino'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
		payment: ['Cash', 'Cards'],
		description: 'Serving up delicious chicken treats!',
		website: 'http://www.chicknfix.com',
		Facebook: 'https://www.facebook.com/chickn.fix',
		Twitter: 'https://twitter.com/Chicknfix',
        read: false
	},
	{
		_id: 35,
        name: 'Chopstix',
		type: ['Asian Fusion'],
		schedule: ['Tuesday', 'Wednesday', 'Thursday'],
		payment: ['Cash', 'Cards'],
		description: 'Asian Fusion, like the truck\'s name Chopstix. Our specialty is a little twist of Asian cuisine with western cuisine',
		website: 'http://www.chopstixmobile.com',
		Facebook: 'https://www.facebook.com/chopstixmobile',
		Twitter: 'https://twitter.com/ChopstixMobile',
        read: false
	},
	{
		_id: 36,
        name: 'Contigo',
		type: ['Mexican'],
		payment: ['Cash', 'Cards'],
		description: 'Modern Mexican - hand made tortillas and gorditas, all gluten-free',
		website: 'http://www.contigoseattle.com',
		Facebook: 'https://www.facebook.com/contigoseattle',
		Twitter: 'https://twitter.com/ContigoSeattle',
        read: false
	},
	{
		_id: 37,
        name: 'Convoy Coffee',
		type: ['Coffee'],
		schedule: ['Wednesday', 'Saturday', 'Sunday'],
		payment: ['Cash', 'Cards'],
		description: 'A bike-driven mobile coffee stand bringing manually-brewed specialty coffee to Seattle streets, previously Handlebar Coffee',
		website: 'http://instagram.com/convoycoffee',
		Facebook: 'https://www.facebook.com/convoycoffee',
		Twitter: 'https://twitter.com/convoycoffee',
        read: false
	},
	{
		_id: 38,
        name: 'Crisp Creperie',
		type: ['French'],
		schedule: ['Tuesday'],
		payment: ['Cash', 'Cards'],
		description: 'Locally sourced, in-season, top-shelf ingredients in exquisitely crafted crepes',
		website: 'http://www.crispseattle.com',
		Facebook: 'https://www.facebook.com/CrispSeattle',
		Twitter: 'https://twitter.com/CrispSeattle',
        read: false
	},
	{
		_id: 39,
        name: 'Curb Jumper Street Eats',
		type: ['Sandwiches/Burgers', 'Sandwiches', 'Burgers'],
		schedule: ['Monday', 'Wednesday'],
		payment: ['Cash', 'Cards'],
		description: 'Gourmet Sliders and Specialty Sandwiches',
		website: 'http://www.curbjumperstreeteats.com',
		Facebook: 'https://www.facebook.com/CurbJumperStreetEats',
		Twitter: 'https://twitter.com/CurbJumper206',
        read: false
	},
	{
		_id: 40,
        name: 'Curbside',
		type: ['Vietnamese'],
        read: false
	},
	{
		_id: 41,
        name: 'Danielle\'s Crepes',
		type: ['French'],
		schedule: ['Tuesday', 'Friday'],
		payment: ['Cash', 'Cards'],
		description: 'Savory and sweet crepes; breakfast, lunch and dinner; hot coffee and espresso drinks',
		website: 'http://cremacreperie.com',
		Facebook: 'https://www.facebook.com/pages/Crema-Creperie-Espresso-Bar/303099846462139',
        read: false
	},
	{
		_id: 42,
        name: 'Dante\'s Inferno Dogs',
		type: ['Hot Dogs'],
        read: false
	},
	{
		_id: 43,
        name: 'Delicatessen Montanti',
		type: ['Sandwiches'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		payment: ['Cash', 'Cards'],
		description: 'East Coast deli sandwiches to die for!',
		website: 'http://montanti.wix.com/delicatessenmontanti',
		Facebook: 'https://www.facebook.com/pages/Delicatessen-Montanti/823352311016462',
        read: false
	},
	{
		_id: 44,
        name: 'Diablo Food Truckz',
		type: ['Asian'],
		payment: ['Cash'],
		description: 'Serving yakisoba pan (fried noodle sandwiches)',
		Facebook: 'https://www.facebook.com/DiabloFoodTruckz',
		Twitter: 'https://twitter.com/DiabloFood',
        read: false
	},
	{
		_id: 45,
        name: 'Djung on Wheels',
		type: ['Thai'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
		description: 'Family-owned business offering great Thai food',
		Facebook: 'https://www.facebook.com/djungfood',
        read: false
	},
	{
		_id: 46,
        name: 'Dog Japon',
		type: ['Hot Dogs'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		payment: ['Cash', 'Cards'],
		description: 'Hot dogs with a Japanese sensibility',
        read: false
	},
	{
		_id: 47,
        name: 'Dogfather Catering',
		type: ['Hot dogs', 'sausages', 'wood fired pizza', 'Pizza'],
		payment: ['Cash', 'Cards'],
		description: 'Hot dogs, sausages and wood-fired pizza',
		Facebook: 'https://www.facebook.com/dogfathercatering',
		Twitter: 'https://www.twitter.com/dogfathercater',
        read: false
	},
	{
		_id: 48,
        name: 'Don Lucho\'s',
		type: ['Peruvian Sandwiches', 'Sandwiches'],
		payment: ['Cash', 'Cards'],
		description: 'Latin sandwiches',
		website: 'http://www.donluchosinseattle.com',
		Facebook: 'https://www.facebook.com/donluchos206',
		Twitter: 'https://twitter.com/donluchos',
        read: false
	},
	{
		_id: 49,
        name: 'El Animal',
		type: ['Cuban and Argentinian', 'Cuban', 'Argentinian'],
		payment: ['Cash', 'Cards'],
		description: 'Cuban and Argentinian sandwiches and food',
		website: 'http://www.elanimalfoodtruck.com',
		Facebook: 'https://www.facebook.com/elanimalfoodtruck',
        read: false
	},
	{
		_id: 50,
        name: 'El Cabrito',
		type: ['Mexican'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		payment: ['Cash', 'Cards'],
		description: 'Traditional Oaxacan Mexican',
        read: false
	},
	{
		_id: 51,
        name: 'El Camion',
		type: ['Mexican'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'],
		payment: ['Cash'],
		description: 'Bringing you the finest and most authentic of Mexican cuisine',
		website: 'http://www.elcamion.com',
		Twitter: 'https://twitter.com/elcamionseattle',
        read: false
	},
	{
		_id: 52,
        name: 'El Sabroso de Seattle',
		type: ['Mexican'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		payment: ['Cash', 'Cards'],
		description: 'Specializing in Gourmet Tortas, Tacos, Tamales (on green banana leaf) and Quesadillas',
		websites: 'http://www.elsabrosodeseattle.com',
		Facebook: 'https://www.facebook.com/elsabrosobeaconhill',
        read: false
	},
	{
		_id: 53,
        name: 'Ezell\'s Express',
		type: ['Southern'],
		schedule: ['Thursday', 'Friday', 'Saturday'],
		payment: ['Cash', 'Cards'],
		description: 'Fresh, Good and Fast! Famous fried chicken',
		Facebook: 'https://www.facebook.com/pages/Ezells-Express/119007364918927',
		Twitter: 'https://twitter.com/EzellsExpress1',
        read: false
	},
	{
		_id: 54,
        name: 'Falafel Salam',
		type: ['Middle Eastern'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'],
		description: 'Gourmet, authentic falafel & shawarma',
		website: 'http://falafelsalam.com',
		Facebook: 'https://www.facebook.com/FalafelSalam',
		Twitter: 'https://twitter.com/FalafelSalam',
        read: false
	},
	{
		_id: 55,
        name: 'Fez',
		type: ['Mediterranean'],
		schedule: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		payment: ['Cash', 'Cards'],
		description: 'Modern Middle eastern street food (and drink)!',
		Facebook: 'https://www.facebook.com/FezOnWheels/info',
		Twitter: 'https://twitter.com/fezonwheels',
        read: false
	},
	{
		_id: 56,
        name: 'Flair Taco',
		type: ['Mexican'],
		schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		payment: ['Cash'],
		description: 'Regular taco truck in the Fremont neighborhood - open 7 days a week and late night',
		Facebook: 'https://www.facebook.com/pages/Flair-Taco/197832600252403',
        read: false
	},
	{
		_id: 57,
        name: 'Frank\'s Franks',
		type: ['Hot Dogs'],
		schedule: ['Monday', 'Sunday'],
		payment: ['Cash', 'Cards'],
		description: 'Gourmet hot dogs, weiners, sausages, hot links and more, contact at 425.761.9447 or franksfranks3@gmail.com',
		Facebook: 'https://www.facebook.com/franksfrankshotdogs',
        read: false
	},
	{
		_id: 58,
        name: 'Fruit Chatter Box',
		type: ['Sweets'],
		schedule: ['Sunday'],
		payment: ['Cash', 'Cards'],
		description: 'Fruit Chatter Box provides fresh, seasonal fresh fruit in cups or on a stick at local festivals and street fairs.',
		Facebook: 'https://www.facebook.com/fruitchatterbox',
		Twitter: 'https://twitter.com/fruitchatterbox',
        read: false
	},
	{
		_id: 59,
        name: 'Full Tilt Ice Cream',
		type: ['Sweets'],
        schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		payment: ['Cash', 'Cards'],
		description: 'Handmade ice creams!',
		website: 'http://www.fulltilticecream.com',
		Facebook: 'https://www.facebook.com/fulltilticecreams',
		Twitter: 'https://twitter.com/fticecream',
        read: false
	}
];

var _ = require('underscore');
  
function filterByDay(day){
//  var trucksFilter = _.filter(foodTrucks, function(day));  
    return _.filter(foodTrucks, function(truck){
          return _.contains(truck.schedule, day);
    });
}
                  
function getTrucks() {
  return truckList;
}

function getTruck(id) {
    id = parseInt(id, 10);
    return _.find(truckList, function(truck) {
            return truck._id === id;
    });
}

function getFoodTypes() {
  return typeList;
}

function filterByFoodTypes(){
//  var trucksFilter = _.filter(foodTrucks, function(day));  
    return _.filter(typeList, function(truck){
          return _.contains(truck.type);
    });
}

function addTruck(truck){
    if (truck){
      truckList.push(truck);
    }
}

function removeTruck(id) {
    id = parseInt(id, 10);
    var index = _.findIndex(truckList, function (truck) {
        return truck._id === id;
    });
    
    bookTruck.splice(index, 1);
}

module.exports = {
  filterByDay:       filterByDay,
  getTrucks:         getTrucks,
  getTruck:          getTruck,
  getFoodTypes:      getFoodTypes,
  filterByFoodTypes: filterByFoodTypes,
  addTruck:          addTruck,
  removeTruck:       removeTruck
};
// this module should support the following methods:
// getTrucks() - return all trucks
// getTruck(name) - return the truck object matching 'name'
// getFoodTypes() - return unique list of all associated food types (underscore has a function to help)
// filterByDay(day) - return trucks with 'day' in schedule (use your filterByDay function from Module 3 homework)
// filterByFoodType(foodType) - return trucks with associated 'foodType'
