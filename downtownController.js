var app = angular.module('dcTable');

app.controller('downtownpageCtrl', ['$scope', 'downtownAPI', function($scope, downtownAPI) {
    downtownAPI[0].retrieveYelp('', function(data){
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
        downtownAPI[2].setProp(arrayNumber,item.name)

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
