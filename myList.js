var app = angular.module('dcTable');

app.controller('listController', function restaurantList($scope) {

   $scope.restaurants = [
     {name: 'Bucharest', neighborhood: 'Downtown'},
     {name: 'Ottava Via', neighborhood: 'Corktown'},
     {name: 'Supino Pizzeria', neighborhood: 'Eastern Market'}
   ];

  $scope.add = function(name, neighborhood) {
     var newRestaurantAdd = {};
     newRestaurantAdd.name = $scope.newRestaurant;
     newRestaurantAdd.neighborhood= $scope.newNeighborhood;
     $scope.restaurants.push(newRestaurantAdd);

   }

});
app.controller('searchAPI', ['$scope', 'myYelpAPI', 'corktownAPI', 'midtownAPI', 'downtownAPI', 'estmktAPI', function($scope, myYelpAPI, corktownAPI, midtownAPI, downtownAPI, estmktAPI) {

   myYelpAPI.retrieveYelp('', function(data){
    $scope.apiList = [];
    for(var i = 0; i < data.businesses.length; i++){
          var stuff = data.businesses[i];
          var newRestaurantAdd = {};
          newRestaurantAdd.name = stuff.name;
          newRestaurantAdd.neighborhood= stuff.neighborhood;
          $scope.restaurants.push(newRestaurantAdd);
        }
    });

    corktownAPI.retrieveYelp('', function(data){
     $scope.apiList = [];
     for(var i = 0; i < data.businesses.length; i++){
           var stuff = data.businesses[i];
           $scope.apiList.push(stuff.name);
         }
     });

     midtownAPI.retrieveYelp('', function(data){
      $scope.apiList = [];
      for(var i = 0; i < data.businesses.length; i++){
            var stuff = data.businesses[i];
            $scope.apiList.push(stuff.name);
          }
      });

      downtownAPI.retrieveYelp('', function(data){
       $scope.apiList = [];
       for(var i = 0; i < data.businesses.length; i++){
             var stuff = data.businesses[i];
             $scope.apiList.push(stuff.name);
           }
       });

       estmktAPI.retrieveYelp('', function(data){
        $scope.apiList = [];
        for(var i = 0; i < data.businesses.length; i++){
              var stuff = data.businesses[i];
              $scope.apiList.push(stuff.name);
            }
        });

  }])
