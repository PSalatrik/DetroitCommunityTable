var app = angular.module('dcTable');

app.controller('corktownpageCtrl', ['$scope', 'corktownAPI', function($scope, corktownAPI) {
    corktownAPI[0].retrieveYelp('', function(data){
     $scope.restaurants = [];
     for(var i = 0; i < data.businesses.length; i++){
           var stuff = data.businesses[i];
           var newRestaurantAdd = {};
           newRestaurantAdd.name = stuff.name;
           $scope.restaurants.push(newRestaurantAdd);
           console.log($scope.restaurants);
           }
     });


      $scope.select= function(item) {
        var arrayNumber=item.name;      //change to value of button
        $scope.selected = item;
        console.log(item.name);
        $scope.restaurant = item;
        corktownAPI[2].setProp(item.name);

      };

      $scope.isActive = function(item) {
        return $scope.selected === item;
      };

  }])