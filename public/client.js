$(function () {
  'use strict';
	$.get('/trucks', function (trucks) {
		var truckList = [];
		trucks.forEach(function (truck) {
			truckList.push('<li class="truck" style="display:none" ><a href="/trucks/' + truck.name + '/">' + truck.name + '</a></li>');
		});
		$('.truck-list').append(truckList);
	});

  $.get('/food-types', function (foods) {
    var foodsList = [];
    foods.forEach(function (food) {
      foodsList.push('<li class="food" style="display:none" ><a href="' + food + '/">' + food + '</a></li>');
    });
    $('.types-list').append(foodsList);
  });

  $('.truck-list').click(function () {

    $(".truck").toggle("slow");
  });

  $('.types-list').click(function () {
    $(".food").toggle("slow");
  });

  $('.truck').click(function (e) {
    console.log(e);
    e.preventDefault();
    $('right').empty();
  });
});

function parseJSON () {
  'use strict'
};

function loadAJAX (filter) {
  'use strict';
  console.log('schoolapi.php?' + filter);
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: "schoolapi.php?" + filter,
    success: parseJSON
  });

}


