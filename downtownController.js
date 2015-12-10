var app = angular.module('dcTable');

app.controller('downtownpageCtrl', ['$scope', 'downtownAPI', function($scope, downtownAPI) {
    downtownAPI.retrieveYelp('', function(data){
     $scope.apiList = [];
     for(var i = 0; i < data.businesses.length; i++){
           var stuff = data.businesses[i];
           var newRestaurantAdd = {};
           newRestaurantAdd.name = stuff.name;
           $scope.restaurants.push(newRestaurantAdd);
           }
     });


      $scope.select= function(item) {
        $scope.selected = item; 
      };

      $scope.isActive = function(item) {
        return $scope.selected === item;
      };
  }])


