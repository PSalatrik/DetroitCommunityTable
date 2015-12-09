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
     var list = $scope.apiList

      
  }

  $scope.test = function (obj) {
        if (obj === 'newRestaurant.name') {
          console.log(true);
        } 
        else {
          console.log("No restaurants match your search");
        }
   }

});

app.controller('apiCtrl', ['$scope', 'myYelpAPI', function($scope, myYelpAPI) {

   myYelpAPI.retrieveYelp('', function(data){
    $scope.apiList = [];
    for(var i = 0; i < data.businesses.length; i++){
          var stuff = data.businesses[i];
          var newRestaurantAdd = {};
          newRestaurantAdd.name = stuff.name;
          newRestaurantAdd.neighborhood= stuff.location.neighborhoods;
          $scope.restaurants.push(newRestaurantAdd);
        }
    });
}])

app.controller('corktownCtrl', ['$scope', 'corktownAPI', function($scope, corktownAPI) {
    corktownAPI.retrieveYelp('', function(data){
     $scope.apiList = [];
     for(var i = 0; i < data.businesses.length; i++){
           var stuff = data.businesses[i];
           var newRestaurantAdd = {};
           newRestaurantAdd.name = stuff.name;
           newRestaurantAdd.neighborhood= stuff.location.neighborhoods[0];
           $scope.restaurants.push(newRestaurantAdd);
           }
     });
  }])


      app.controller('estmktCtrl', ['$scope', 'estmktAPI', function($scope, estmktAPI) {
          estmktAPI.retrieveYelp('', function(data){
           $scope.apiList = [];
           for(var i = 0; i < data.businesses.length; i++){
                 var stuff = data.businesses[i];
                 var newRestaurantAdd = {};
                 newRestaurantAdd.name = stuff.name;
                 newRestaurantAdd.neighborhood= stuff.location.neighborhoods[0];
                 $scope.restaurants.push(newRestaurantAdd);
                 }
           });
        }])


            app.controller('downtownCtrl', ['$scope', 'downtownAPI', function($scope, downtownAPI) {
                downtownAPI.retrieveYelp('', function(data){
                 $scope.apiList = [];
                 for(var i = 0; i < data.businesses.length; i++){
                       var stuff = data.businesses[i];
                       var newRestaurantAdd = {};
                       newRestaurantAdd.name = stuff.name;
                       newRestaurantAdd.neighborhood= stuff.location.neighborhoods[0];
                       $scope.restaurants.push(newRestaurantAdd);
                       }
                 });
              }])



  app.controller('midtownCtrl', ['$scope', 'midtownAPI', function($scope, midtownAPI){
      midtownAPI.retrieveYelp('', function(data){
       $scope.apiList = [];
       for(var i = 0; i < data.businesses.length; i++){
             var stuff = data.businesses[i];
             var newRestaurantAdd = {};
             newRestaurantAdd.name = stuff.name;
             newRestaurantAdd.neighborhood= stuff.location.neighborhoods[0];
             $scope.restaurants.push(newRestaurantAdd);
             }
       });
    }])
