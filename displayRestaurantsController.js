var app = angular.module('dcTable');

app.controller('displayRestaurantsController', ['$scope', 'yelpApi', '$routeParams', function($scope, yelpApi, $routeParams) {
    var area_map = {
      'downtown' : 'Detroit, 48226',
      'midtown' : 'Detroit, Midtown',
      'corktown' : 'Detroit, Corktown',
      'estmkt' : 'Detroit, Eastern Market'
    };
    $scope.vm = {};
    $scope.vm.area_name = area_map[$routeParams.area];
    $scope.vm.restaurants = [];
    yelpApi.retrieveYelp($scope.vm.area_name, function(data) {
        $scope.vm.restaurants = [];
        for (var i = 0; i < data.businesses.length; i++) {
            var stuff = data.businesses[i];
            var newRestaurantAdd = {};
            newRestaurantAdd.name = stuff.name;
            $scope.vm.restaurants.push(newRestaurantAdd);
        }
    });

    $scope.vm.select = function(item) {
        var arrayNumber = item.name; //change to value of button
        $scope.selected = item;
        console.log(item);
        $scope.resturant = item;
        yelpApi.setProp(arrayNumber, item.name)

    };

    $scope.vm.isActive = function(item) {
        return $scope.selected === item;
    };

}]);
