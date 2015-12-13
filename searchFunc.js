/*var app = angular.module('dcTable');

app.controller('listController', ['$scope', 'corktownAPI', function($scope, corktownAPI) {
  
   corktownAPI[0].retrieveYelp('', function(data){

          $scope.items = data.businesses;
          console.log($scope.items);

        });

   var work = $scope.arr = [];
  var youBetter = work.toString();
  $scope.name = '';

  $scope.onItemSelected = function() {

    $scope.arr.push($scope.name);
  };
     
}]);

app.directive('typedir', function($timeout){
  return {
    restrict: 'AEC',
    scope: {
      items: '=',
      prompt: '@',
      title: '@',
      subtitle: '@',
      model: '=',
      onSelect: '&'
    },
    link: function(scope, elem, attrs){
      scope.handleSelection = function(selectedItem){
        scope.model = selectedItem;
        scope.current = 0;
        scope.selected = true;
        $timeout(function() {
          scope.onSelect();
        }, 200);
        scope.current = selectedItem;
      };
      scope.current = 0;
      scope.selected = true;
      scope.isCurrent = function(index){
        return scope.current == index;

      };
      scope.setCurrent = function(index){
        scope.current = index;
  
      };
    },
    templateUrl: 'searchTemplate.html'
  };
});*/