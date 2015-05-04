 $(function () {
 	$.get('/trucks', function (trucks) {
 		var truckList = [];
		console.log(trucks);
 	//	trucks.forEach(function (truck) {
 	//		truckList.push('<li><a href="/trucks/' + truck.name + '/">' + truck.name + '</a></li>')
 	//	});
 	//	$('.truck-list').append(truckList);
		$('.truck-list').append(trucks);
 	});
 });