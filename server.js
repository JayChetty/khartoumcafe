var express = require('express')
var app = express();
var http = require("http");
var server = http.Server(app);
var path = require('path');

server.listen(process.env.PORT || 5000);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/construction.html');
});

app.get('/index', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/team', function (req, res) {
  res.sendFile(__dirname + '/team.html');
});

app.get('/treatments', function (req, res) {
  res.sendFile(__dirname + '/treatments.html');
});

app.get('/cost', function (req, res) {
  res.sendFile(__dirname + '/cost.html');
});

app.get('/accessibility', function (req, res) {
  res.sendFile(__dirname + '/accessibility.html');
});



setInterval(function() {
    http.get("http://floating-harbor-9787.herokuapp.com");
}, 1800000); // every 30 minutes (60 * 1000 * 30)