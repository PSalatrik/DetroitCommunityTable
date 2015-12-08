var app = angular.module('dcTable');

app.controller('listController', function restaurantList($scope) {

   $scope.restaurants = [
     {rest: 'Bucharest', neighborhood: 'Downtown'},
     {rest: 'Ottava Via', neighborhood: 'Corktown'},
     {rest: 'Supino Pizzeria', neighborhood: 'Eastern Market'}
   ];

  $scope.add = function(name, neighborhood) {
     var newRestaurantAdd = {};
     newRestaurantAdd.rest = $scope.newRestaurant;
     newRestaurantAdd.neighborhood= $scope.newNeighborhood;
     $scope.restaurants.push(newRestaurantAdd);

   }

});