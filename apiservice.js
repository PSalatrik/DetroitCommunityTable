 function randomString(length, chars) {
                var result = '';
                for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
                return result;
            }

var app = angular.module("dcTable", [])

app.service('yelpService', function($http){

   return $http({
       var method: 'GET',
       var url: "https://api.yelp.com/v2/business/yelp-detroit",
      
       var para ={
        oauth_consumer_key: NuLE3hAVaJWmVMyRMnTM-A,
        oauth_token: WzPzrA7tcIEv-YuRR1_ilXdyylqOdvVH,
        oauth_signature_method: "HMAC-SHA1",
        oauth_timestamp: new Date().getTime(),
        oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')

    })

      var consumer_secret= adjPf1c0JJy2LWeAsqEz7QrL_sQ
      var token_secret = 8gyS5zdHd4uaVCPiEoxZu_PjOU4
      var signature = oauthSignature.generate(method, url, param, consumerSecret, tokenSecret, { encodeSignature: false});
                        params['oauth_signature'] = signature;
          //$http.jsonp(url, {params: params}).success(callback);
    }).then(function workingCallback(response){
      displayFoodStuff.data = response.data."whatever.whatever";
    }, function errorCallBack(response){
      console.log("Stop Yelping at me")
    });
      

})
