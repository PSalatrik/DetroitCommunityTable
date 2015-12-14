 function randomString(length, chars) {
     var result = '';
     for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
     return result;
 }

 var app = angular.module("dcTable");

 app.factory("yelpApi", function($http) {
     var data = [];
     return {
         retrieveYelp: function(location, callback) {
             $http.get('/yelp/search?location='+location).success(callback);
         },
         getProp: function(name) {
             return data;
         },
         setProp: function(name, value) {
             data.push(value);
         }
     };
 });


 //eastern market Detroit, Eastern Market
 //downtown Detroit, 48226
 //Detroit, Midtown
 //Detroit, Corktown
