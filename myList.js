var app = angular.module('dcTable');

app.controller('listController', ['$scope', 'corktownAPI', function($scope, corktownAPI) {
   $scope.restaurants = [];
   //make this happen for each item in data as opposed to only first item
   $scope.pickedRestaurant = corktownAPI.getProp();

  $scope.add = function(name, neighborhood) {
     var newRestaurantAdd = {};
     newRestaurantAdd.name = $scope.newRestaurant;
     newRestaurantAdd.neighborhood= $scope.newNeighborhood;
     $scope.restaurants.push(newRestaurantAdd);
     
    }

}]);

app.controller('listController', ['$scope', 'midtownAPI', function($scope, midtownAPI) {
   $scope.restaurants = [];
   //make this happen for each item in data as opposed to only first item
   $scope.pickedRestaurant = [midtownAPI[1].getProp("0")];

  $scope.add = function(name, neighborhood) {
     var newRestaurantAdd = {};
     newRestaurantAdd.name = $scope.newRestaurant;
     newRestaurantAdd.neighborhood= $scope.newNeighborhood;
     $scope.restaurants.push(newRestaurantAdd);
     var list = $scope.apiList


  }

}]);

app.controller('listController', ['$scope', 'downtownAPI', function($scope, downtownAPI) {
   $scope.restaurants = [];
   //make this happen for each item in data as aposed to only first item
   $scope.pickedRestaurant=[downtownAPI[1].getProp("0")];

  $scope.add = function(name, neighborhood) {
     var newRestaurantAdd = {};
     newRestaurantAdd.name = $scope.newRestaurant;
     newRestaurantAdd.neighborhood= $scope.newNeighborhood;
     $scope.restaurants.push(newRestaurantAdd);
     var list = $scope.apiList


  }

}]);

app.controller('listController', ['$scope', 'estmktAPI', function($scope, estmktAPI) {
   $scope.restaurants = [];
   //make this happen for each item in data as aposed to only first item
   $scope.pickedRestaurant=[estmktAPI[1].getProp("0")];

  $scope.add = function(name, neighborhood) {
     var newRestaurantAdd = {};
     newRestaurantAdd.name = $scope.newRestaurant;
     newRestaurantAdd.neighborhood= $scope.newNeighborhood;
     $scope.restaurants.push(newRestaurantAdd);
     var list = $scope.apiList


  }

}]);
