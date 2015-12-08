var app = angular.module("dcTable", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "Corktown.html",
      controller: "missionControl"
    })
    .when("/view2", {
      templateUrl: "",
      controller: "missionControl"
    })
    .when("/view3", {
      templateUrl: "",
      controller: "fizzBuzzControl"
    })
    .otherwise({
      templateUrl: "",
      controller: "missionControl"
    })
});

