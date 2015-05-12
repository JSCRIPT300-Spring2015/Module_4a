$(function () {
	$.get('/trucks', function (trucks) {
		var truckList = [];
		trucks.forEach(function (truck) {
			truckList.push('<li><a href="/trucks/' + truck.name + '/">' + truck.name + '</a></li>');
		});
		$('.truck-list').append(truckList);
	});
});