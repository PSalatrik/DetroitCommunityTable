var app = angular.module('dcTable');

app.controller('displayRestaurantsController', ['$scope', 'yelpApi', '$routeParams', '$http', function($scope, yelpApi, $routeParams, $http) {
    var area_map = {
        'downtown': 'Detroit, 48226',
        'midtown': 'Detroit, Midtown',
        'corktown': 'Detroit, Corktown',
        'estmkt': 'Detroit, Eastern Market'
    };
    $scope.vm = {};
    $scope.vm.area_name = area_map[$routeParams.area];
    $scope.vm.area_display = $scope.vm.area_name + ' Restaurants';
    $scope.vm.restaurants = [];

    yelpApi.retrieveYelp($scope.vm.area_name, function(data) {
        $scope.vm.restaurants = data.businesses;
    });

    $http.get('/api/restaurants/saved')
        .success(function(items) {
            $scope.vm.saved_restaurants = items;
        });

    $scope.vm.select = function(item) {
        $http.post('/api/restaurants/add', {
            restaurant: item.name
        }).success(function(data) {
            $scope.vm.name = "";
            $scope.vm.saved_restaurants = data;
        });
    };

    $scope.vm.isActive = function(item) {
        return $scope.selected === item;
    };

}]);
