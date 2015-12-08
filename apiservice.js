
var app = angular.module("dcTable")

app.service('yelpService', function($http){
    var displayFoodStuff = {};

    $http({
      method: 'GET',
      url: yelp.com
      Consumer Key  NuLE3hAVaJWmVMyRMnTM-A
      Consumer Secret adjPf1c0JJy2LWeAsqEz7QrL_sQ
      Token WzPzrA7tcIEv-YuRR1_ilXdyylqOdvVH
      Token Secret  8gyS5zdHd4uaVCPiEoxZu_PjOU4
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





