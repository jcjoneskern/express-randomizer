var express = require('express');
var app = express();
var quote = require("./module");

app.get('/', function (req, res) {
  res.send(quote.randomizer());
});

app.get("/api/quotes", function(req, res) {
  res.send(quote.randomThings);
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
