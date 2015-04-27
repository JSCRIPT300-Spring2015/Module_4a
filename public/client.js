$(function () {
	
	$.get('/trucks', function (trucks) {
		var truckList = [];
		trucks.forEach(function (truck) {
			truckList.push('<li><a href="/trucks/' + truck.name + '/">' + truck.name + '</a></li>')
		});
		$('.truck-list').append(truckList);
	});

	$.get('/food-types', function (foodTypes) {
		var foodTypeList = [];
		foodTypes.forEach(function (type) {
			foodTypeList.push('<li><a href="/food-types/' + type + '/">' + type + '</a></li>')
		});
		$('.food-type-list').append(foodTypeList);
	});	

});