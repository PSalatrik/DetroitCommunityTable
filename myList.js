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
app.controller('searchAPI', ['$scope', 'myYelpAPI', function($scope, myYelpAPI) {
   
   myYelpAPI.retrieveYelp('', function(data){
    $scope.apiList = [];
    for(var i = 0; i < data.businesses.length; i++){
          var stuff = data.businesses[i];
          $scope.apiList.push(stuff.name);
}



   })
       
  }])
