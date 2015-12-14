var app = angular.module('dcTable', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/areas/:area', {
        controller: 'displayRestaurantsController',
        templateUrl: 'areaRestaurants.html'
    }).otherwise({
        templateUrl: 'home.html'
    });
});
