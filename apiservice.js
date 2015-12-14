var app = angular.module("dcTable");

app.factory("yelpApi", function($http) {
    var data = [];
    return {
        retrieveYelp: function(location, callback) {
            $http.get('/api/yelp/search?location=' + location).success(callback);
        }
    };
});