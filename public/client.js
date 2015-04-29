$(function () {
	// Create a function for the truck list so that it can be called
	// in order to switch between trucks and types.
	// Immediately invoked to make truck list the default view
	var truckView = (function truckView() {
		
		$.get('/trucks', function (trucks) {			
			var truckList = [];
			trucks.forEach(function (truck) {
				truckList.push('<li><a href="/trucks/' + truck.name + '/">' + 
						truck.name + '</a></li>');
			});
			$('.list').html(truckList);
			// Change the data-view attribute to type in order to call
			// typeView the next time change-list is clicked.
			$('#change-list').data('view', 'type');
			$('#change-list').html('View Food Types');
		});
	})();
	// Same as truckView, only this one makes a list of food types.
	// Since this is not default, it is not an iife.
	var typeView = function typeView() {
		$.get('/food-types', function (types) {

			var typeList = [];
			types.forEach(function (type) {
				typeList.push('<li><a href="/food-types/' + type + '/">' + 
						type + '</a></li>');
			});
			$('.list').html(typeList);
			$('#change-list').data('view', 'truck');
			$('#change-list').html('View List of Trucks');
		});
	};

	// When the change list button is clicked, call the necessary function
	// to change the display.
	$('#change-list').on('click', function () {

		if ($('#change-list').data('view') === 'type') {
			typeView();
		} else {
			truckView();
		}
	});
});
