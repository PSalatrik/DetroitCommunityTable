var app = angular.module("dcTable");

app.controller('missionControl', function($scope, redditService) {

		$scope./*API PAYLOAD*/ = redditService.getContent();
		// getContent() returns response.data.children which is an array.

});