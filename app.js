
var app = angular.module('dcTable', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/areas/:neighborhood', {
        controller: 'displayRestaurantsController',
        templateUrl: 'areaRestaurants.html'
    })
    .when('/restaurants', {
    	controller: 'myListController',
    	templateUrl: 'myList.html'
    }).otherwise({
        templateUrl: 'home.html'
    });
});
