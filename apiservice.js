 function randomString(length, chars) {
                var result = '';
                for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
                return result;
            }

var app = angular.module("dcTable");

app.factory("myYelpAPI", function($http) {
    return {
        "retrieveYelp": function(name, callback) {
            var method = 'GET';
            var url = 'https://api.yelp.com/v2/search/?term=Restaurants&location=Detroit';
            var params = {
                    callback: 'angular.callbacks._0',
                    location: 'Detroit',
                    oauth_consumer_key: 'NuLE3hAVaJWmVMyRMnTM-A', //Consumer Key
                    oauth_token: 'WzPzrA7tcIEv-YuRR1_ilXdyylqOdvVH', //Token
                    oauth_signature_method: "HMAC-SHA1",
                    oauth_timestamp: new Date().getTime(),
                    oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
                    term: 'food'
                };
            var consumerSecret = 'adjPf1c0JJy2LWeAsqEz7QrL_sQ'; //Consumer Secret
            var tokenSecret = '8gyS5zdHd4uaVCPiEoxZu_PjOU4'; //Token Secret
            var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
            params['oauth_signature'] = signature;
            $http.jsonp(url, {params: params}).success(callback);
        }
    }

});

app.factory("corktownAPI", function($http) {
    return {
        "retrieveYelp": function(name, callback) {
            var method = 'GET';
            var url = 'https://api.yelp.com/v2/search/?term=Restaurants&location=Detroit, Corktown';
            var params = {
                    callback: 'angular.callbacks._0',
                    location: 'Detroit',
                    oauth_consumer_key: 'NuLE3hAVaJWmVMyRMnTM-A', //Consumer Key
                    oauth_token: 'WzPzrA7tcIEv-YuRR1_ilXdyylqOdvVH', //Token
                    oauth_signature_method: "HMAC-SHA1",
                    oauth_timestamp: new Date().getTime(),
                    oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
                    term: 'food'
                };
            var consumerSecret = 'adjPf1c0JJy2LWeAsqEz7QrL_sQ'; //Consumer Secret
            var tokenSecret = '8gyS5zdHd4uaVCPiEoxZu_PjOU4'; //Token Secret
            var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
            params['oauth_signature'] = signature;
            $http.jsonp(url, {params: params}).success(callback);
          }
      }

  });

  app.factory("midtownAPI", function($http) {
      return {
          "retrieveYelp": function(name, callback) {
              var method = 'GET';
              var url = 'https://api.yelp.com/v2/search/?term=Restaurants&location=Detroit, Midtown';
              var params = {
                      callback: 'angular.callbacks._0',
                      location: 'Detroit',
                      oauth_consumer_key: 'NuLE3hAVaJWmVMyRMnTM-A', //Consumer Key
                      oauth_token: 'WzPzrA7tcIEv-YuRR1_ilXdyylqOdvVH', //Token
                      oauth_signature_method: "HMAC-SHA1",
                      oauth_timestamp: new Date().getTime(),
                      oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
                      term: 'food'
                  };
              var consumerSecret = 'adjPf1c0JJy2LWeAsqEz7QrL_sQ'; //Consumer Secret
              var tokenSecret = '8gyS5zdHd4uaVCPiEoxZu_PjOU4'; //Token Secret
              var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
              params['oauth_signature'] = signature;
              $http.jsonp(url, {params: params}).success(callback);
            }
        }

    });

app.factory("downtownAPI", function($http) {
        return {
            "retrieveYelp": function(name, callback) {
                var method = 'GET';
                var url = 'https://api.yelp.com/v2/search/?term=Restaurants&location=Detroit, Downtown';
                var params = {
                        callback: 'angular.callbacks._0',
                        location: 'Detroit',
                        oauth_consumer_key: 'NuLE3hAVaJWmVMyRMnTM-A', //Consumer Key
                        oauth_token: 'WzPzrA7tcIEv-YuRR1_ilXdyylqOdvVH', //Token
                        oauth_signature_method: "HMAC-SHA1",
                        oauth_timestamp: new Date().getTime(),
                        oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
                        term: 'food'
                    };
                var consumerSecret = 'adjPf1c0JJy2LWeAsqEz7QrL_sQ'; //Consumer Secret
                var tokenSecret = '8gyS5zdHd4uaVCPiEoxZu_PjOU4'; //Token Secret
                var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
                params['oauth_signature'] = signature;
                $http.jsonp(url, {params: params}).success(callback);
              }
          }

});

      app.factory("estmktAPI", function($http) {
          return {
              "retrieveYelp": function(name, callback) {
                  var method = 'GET';
                  var url = 'https://api.yelp.com/v2/search/?term=Restaurants&location=Detroit, Eastern Market';
                  var params = {
                          callback: 'angular.callbacks._0',
                          location: 'Detroit',
                          oauth_consumer_key: 'NuLE3hAVaJWmVMyRMnTM-A', //Consumer Key
                          oauth_token: 'WzPzrA7tcIEv-YuRR1_ilXdyylqOdvVH', //Token
                          oauth_signature_method: "HMAC-SHA1",
                          oauth_timestamp: new Date().getTime(),
                          oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
                          term: 'food'
                      };
                  var consumerSecret = 'adjPf1c0JJy2LWeAsqEz7QrL_sQ'; //Consumer Secret
                  var tokenSecret = '8gyS5zdHd4uaVCPiEoxZu_PjOU4'; //Token Secret
                  var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
                  params['oauth_signature'] = signature;
                  $http.jsonp(url, {params: params}).success(callback);
                }
            }

});
