var app = angular.module('dcTable');

app.controller('displayRestaurantsController', ['$scope', 'yelpApi', '$routeParams', '$http', function($scope, yelpApi, $routeParams, $http) {
    var area_map = {
        'downtown': 'Detroit, 48226',
        'midtown': 'Detroit, Midtown',
        'corktown': 'Detroit, Corktown',
        'estmkt': 'Detroit, Eastern Market'
    };
    $scope.vm = {};//empty object that all things below go into
    $scope.vm.area_name = area_map[$routeParams.neighborhood];//tells area_name to be the value of the key .area (i.e. corktown, downtown, midtown, estmkt)
    $scope.vm.area_display = $scope.vm.area_name + ' Restaurants';//ng-bind header
    $scope.vm.restaurants = [];//declares empty, look to line 21-22
    $scope.vm.header = $routeParams.neighborhood + " Restaurants";

    yelpApi.retrieveYelp($scope.vm.area_name, function(data) {
        $scope.vm.restaurants = data.businesses;//fills in with api response

    });

   //setter
   $scope.vm.select = function(areaRestaurantsClicked) {
        $http.post('/api/restaurants/add', {
            restaurant: areaRestaurantsClicked.name,
            stars: areaRestaurantsClicked.rating
        }).success(function(data) {
            $scope.vm.name = "";
            $scope.vm.stars = "";
            $scope.vm.saved_restaurants = data;

        });
    };

   //getter
    $http.get('/api/restaurants/saved')
        .success(function(returnObjectsinNeverland) {
            $scope.vm.saved_restaurants = returnObjectsinNeverland;
            console.log($scope.vm.saved_restaurants);
        });



    $scope.vm.isActive = function(item) {
        return $scope.selected === item;
    };

}]);
