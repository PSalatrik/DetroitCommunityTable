var app = angular.module('dcTable');

app.controller('corktownpageCtrl', ['$scope', 'corktownAPI', function($scope, corktownAPI) {
  
      $scope.restaurants = corktownAPI.getRestaurants();
      
      $scope.select= function(item) {
        var objectName = item.name;      //change to value of button
        $scope.selected = item;
        console.log(item);
        $scope.resturant = item;
        corktownAPI.setProp(objectName,item.name)

      };

      $scope.isActive = function(item) {
        return $scope.selected === item;
      };


//this still might help
      /*$scope.addNew= function(name, neighborhood) {
     var newRestaurantAdd = {};
     newRestaurantAdd.name = $scope.newRestaurant;
     newRestaurantAdd.neighborhood= $scope.newNeighborhood;
     $scope.restaurants.push(newRestaurantAdd);
     var list = $scope.apiList;
     console.log(item.name);}*/

      
  
  }])


