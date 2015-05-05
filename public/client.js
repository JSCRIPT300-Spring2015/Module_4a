 $(function () {
 	$.get('/trucks', function (trucks) {
 		var truckList = [];
 		trucks.forEach(function (truck) {
 			truckList.push('<li><a href="/trucks/' + truck.name + '/">' + truck.name + '</a></li>')
 		});
 		$('.truck-list').append(truckList);
 	});
         
    $('#myDiv').click(function() {
        $('.truck-list').hide();
        
        $.ajax({
            method: 'GET',
            url: '/food-types',
            dataType: JSON,
        })
            .done(function (foodArray) {
                var foodList = [];
                foodArray.forEach(function (food) {
                    foodList.push('<li><a href="/food-types/' + food + '/">' + food + '</a></li>')
                });
                $('.food-list').append(foodList);
            });
    });
});