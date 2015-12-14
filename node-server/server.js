var path = require('path'),
    fs = require('fs'),
    express = require('express'),
    http = require('http'),
    yelp = require('./yelp'),
    app = express(),
    http_port = process.env.HTTP_PORT || 8080,
    http_server = http.createServer(app);


app.use(express.static(path.resolve(__dirname + '/../')));

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../index.html'));
});

app.get('/yelp/search', function(req, res) {
	console.log(req.query);
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


http_server.listen(http_port);
console.log('Listening for http on ' + http_port);
