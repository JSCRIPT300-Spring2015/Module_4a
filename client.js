$(function () {
    $.get('/trucks', function (trucks) {
        var truck:List = [];
            trucks.forEach(fuction (truck) {
                truckList.push('<li><a href="/trucks/' + truck.name + '/">' + truck.name + '</a></li>')
            });
            $('.truck-list').append(truckList);
    });
});