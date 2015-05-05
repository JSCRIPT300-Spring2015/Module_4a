 $(function () {
 	$.get('/trucks', function (trucks) {
 		var truckList = [];
		var truckObject = JSON.parse(trucks);
 		truckObject.forEach(function (truck) {
 			truckList.push('<li><a href="/trucks/' + truck.name + '/">' + truck.name + '</a></li>')
 		});
 		$('.truck-list').append(truckList);
 	});
 });