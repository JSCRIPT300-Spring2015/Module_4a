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
      foodsList.push('<li class="food" style="display:none" ><a href="/food-types/' + encodeURIComponent(food) + '/">' + food + '</a></li>');
    });
    $('.types-list').append(foodsList);
  });

  $('.truck-list').click(function () {

    $(".truck").toggle("slow")
      .click(function (e) {
        e.preventDefault();
        var href = $(this).find('a:first').attr('href');
        loadAJAX(href);
      });
  });

  $('.types-list').click(function () {
    $(".food").toggle("slow")
      .click(function (e) {
        e.preventDefault();
        var href = $(this).find('a:first').attr('href');
        loadAJAX(href);
      });
  });
});

function parseJSON (data) {
  'use strict';
  var attribute;
  var trucks = [];
  var truck;
  $('.right').empty();
  if (data.length === undefined || data.length === 1) {
    attribute = [];
    if (data.length === 1) {
      data = data[0];
    }
    trucks = $('<ul><h3><strong>' + data.name + '</strong></h3></ul>');
    delete data.name;
    for (var k in data) {
      if (data.hasOwnProperty(k)) {
        attribute.push('<li><strong>' + k + '</strong>: ' + data[k] + '</li>');
      }
    }
    trucks.append(attribute);
    $('.right').append(trucks);
  } else {
    data.forEach( function (aTruck) {
      truck = $('<ul><h3><strong>' + aTruck.name + '</strong></h3></ul>');
      delete aTruck.name;
      for (var k in aTruck) {
        if (aTruck.hasOwnProperty(k)) {
          truck.append('<li><strong>' + k + '</strong>: ' + aTruck[k] + '</li>');
        }
      }
      truck.append(attribute);
      $('.right').append(truck);
      $('.right').append('<hr/>');
    });
  }
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


