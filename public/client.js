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
      foodsList.push('<li class="food" style="display:none" ><a href="/food-types/' + food + '/">' + food + '</a></li>');
    });
    $('.types-list').append(foodsList);
  });

  $('.truck-list').click(function () {

    $(".truck").toggle("slow")
      .click(function (e) {
        e.preventDefault();
        var href = $(this).find('a:first').attr('href');
        $('right').empty();
        loadAJAX(href);
      });
  });

  $('.types-list').click(function () {
    $(".food").toggle("slow")
      .click(function (e) {
        e.preventDefault();
        var href = $(this).find('a:first').attr('href');
        $('right').empty();
        loadAJAX(href);
      });
  });
});

function parseJSON (data) {
  'use strict';
  $('.right').text(JSON.stringify(data));
}

function loadAJAX (url) {
  'use strict';
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: url,
    success: parseJSON
  });
}


