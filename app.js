
var app = angular.module('dcTable', ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider.when('/',
		{
			controller: 'routeCtrl',
			templateUrl: 'home.html'
		});

	$routeProvider.when('/myList',
		{
		controller: 'routeCtrl',
		templateUrl: 'myList.html'
		});
	
	$routeProvider.when('/corktown',
		{
		controller: 'routeCtrl',
		templateUrl: 'corktown.html'
		});

	$routeProvider.when('/downtown',
		{
		controller: 'routeCtrl',
		templateUrl: 'downtown.html'
		});

	$routeProvider.when('/estmkt',
		{
		controller: 'routeCtrl',
		templateUrl: 'estmkt.html'
		});

	$routeProvider.when('/midtown',
		{
		controller: 'routeCtrl',
		templateUrl: 'midtown.html'
		});

	$routeProvider.otherwise(
		{
		controller: 'routeCtrl',
		templateUrl: 'home.html'
		});
});

app.controller('routeCtrl', function(){
});
