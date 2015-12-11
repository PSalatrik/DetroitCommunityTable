var app = angular.module('dcTable');

app.controller('listController', ['$scope', 'corktownAPI', function($scope, corktownAPI) {

   $scope.pickedRestaurant = corktownAPI[1].getProp();

}]);

app.controller('listController', ['$scope', 'midtownAPI', function($scope, midtownAPI) {

   $scope.pickedRestaurant = midtownAPI[1].getProp();

}]);

app.controller('listController', ['$scope', 'downtownAPI', function($scope, downtownAPI) {

   $scope.pickedRestaurant=downtownAPI[1].getProp();

}]);

app.controller('listController', ['$scope', 'estmktAPI', function($scope, estmktAPI) {

   $scope.pickedRestaurant= estmktAPI[1].getProp();

}]);
