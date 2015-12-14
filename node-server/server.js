var path = require('path'),
    fs = require('fs'),
    express = require('express'),
    http = require('http'),
    yelp = require('./yelp'),
    crypto = require('crypto'),
    bodyParser = require('body-parser'),
    app = express(),
    storage = require('node-persist'),
    http_port = process.env.HTTP_PORT || 8080,
    http_server = http.createServer(app);

storage.initSync();
storage.setItem('restaurants', []);

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname + '/../')));

app.get('/api/', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../index.html'));
});

app.get('/api/yelp/search', function(req, res) {
    return yelp.search({
            term: 'Restaurants',
            location: req.query.location
        })
        .then(function(data) {
            res.send(data);
        })
        .catch(function(err) {
            res.send(err);
        });
});

app.post('/api/restaurants/add', function(req, res) {
    var restaurants = storage.getItem('restaurants') || [];
    restaurants.push({
        id: crypto.randomBytes(20).toString('hex'),
        name: req.body.restaurant
    });
    storage.setItem('restaurants', restaurants);
    res.send(restaurants);
});

app.get('/api/restaurants/saved', function(req, res) {
    var restaurants = storage.getItem('restaurants') || [];
    res.send(restaurants);
});

http_server.listen(http_port);
console.log('Listening for http on ' + http_port);
