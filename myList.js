var app = angular.module('dcTable');

app.controller('myListController', ['$scope', '$http', 'yelpApi', function($scope, $http, yelpApi) {
    $scope.vm = {};
    $scope.vm.items = [];

    yelpApi.retrieveYelp('Detroit', function(data) {
        $scope.vm.items = data.businesses;
    });

    $http.get('/api/restaurants/saved')
     .success(function(items) {
         $scope.vm.saved_restaurants = items;
     });

    $scope.vm.selectItem = function(item) {
        $http.post('/api/restaurants/add', {
            restaurant: item
        }).success(function(data) {
            $scope.vm.name = "";
            $scope.vm.saved_restaurants = data;
        });
    };

}]);

app.directive('typedir', function($timeout) {
    return {
        restrict: 'AEC',
        transclude: true,
        scope: {
            items: '=',
            prompt: '@',
            title: '@',
            subtitle: '@',
            model: '=',
            onSelect: '&'
        },
        link: function(scope, elem, attrs) {
            scope.handleSelection = function(selectedItem) {
                scope.model = selectedItem;
                scope.current = 0;
                scope.selected = true;
                scope.current = selectedItem;
                scope.onSelect()(selectedItem);
            };
            scope.current = 0;
            scope.selected = true;
            scope.isCurrent = function(index) {
                return scope.current == index;
            };
            scope.setCurrent = function(index) {
                scope.current = index;

            };
        },
        templateUrl: 'searchTemplate.html'
    };
});
