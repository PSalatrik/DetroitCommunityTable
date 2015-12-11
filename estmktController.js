var app = angular.module('dcTable');

app.controller('estmktpageCtrl', ['$scope', 'estmktAPI', function($scope, estmktAPI) {
    estmktAPI[0].retrieveYelp('', function(data){
     $scope.restaurants = [];
     for(var i = 0; i < data.businesses.length; i++){
           var stuff = data.businesses[i];
           var newRestaurantAdd = {};
           newRestaurantAdd.name = stuff.name;
           $scope.restaurants.push(newRestaurantAdd);
           }
     });


      $scope.select= function(item) {
        var arrayNumber=item.name;      //change to value of button
        $scope.selected = item;
        console.log(item);
        $scope.resturant = item;
        estmktAPI[2].setProp(arrayNumber,item.name);

      };

      $scope.isActive = function(item) {
        return $scope.selected === item;
      };

}]);
