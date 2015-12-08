
var app = angular.module("dcTable")

app.service('yelpService', function($http){
    var displayFoodStuff = {};

    $http({
      method: 'GET',
      url: 
    }).then(function workingCallback(response){
      displayFoodStuff.data = response.data."whatever.whatever";
    }, function errorCallBack(response){
      console.log("Stop Yelpeing at me")
    });
      return{
        getContent: function(){
          return displayFoodStuff.data;
        }   
      }

})




Consumer Key    -7o_68Qv15NZhIaI98Y1TQ
Consumer Secret    FAM-q3MTJJWYJSRXhDAZipKrg2U
Token    xuEX_iMf9AfC4YGgjZWUPeL_dzu7a46b
Token Secret    SeFubxhkw4O0OkLjA9TPbJW1UBE



/*var app = angular.module("myMod");

app.service('redditService', function ($http) {

	var displayPhotos = {};

	$http({
  		method: 'GET',
			url: 'https://www.reddit.com/r/funny/.json' //returns a promis
	}).then(function successCallback(response) {    //then takes two functions as para
		displayPhotos.data = response.data.data.children; // 
  }, function errorCallback(response) {
  	console.log("Couldn't get data from reddit.");
  });

  	return {
  		getContent: function() {
  			return displayPhotos.data;
  		}
  	}
});
*/
