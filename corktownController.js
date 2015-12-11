var app = angular.module('dcTable');

app.controller('corktownpageCtrl', ['$scope', 'corktownAPI', function($scope, corktownAPI) {

      $scope.restaurants = corktownAPI.getRestaurants();

      $scope.select= function(item) {
        var objectName = item;      //change to value of button
        $scope.selected = item;
        console.log(item);
        $scope.restaurant = item;
        corktownAPI.setProp(item)

      };

      $scope.isActive = function(item) {
        return $scope.selected === item;
      };

  }])
