var app = angular.module('dcTable');

app.controller('listController', ['$scope', 'corktownAPI', 'midtownAPI', 'downtownAPI', 'estmktAPI', function($scope, corktownAPI, midtownAPI, downtownAPI, estmktAPI) {

   $scope.pickedRestaurant = corktownAPI[1].getProp();
   $scope.pickedRestaurant = midtownAPI[1].getProp();
   $scope.pickedRestaurant = downtownAPI[1].getProp();
   $scope.pickedRestaurant = estmktAPI[1].getProp();
   

}]);
