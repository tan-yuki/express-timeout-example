var express = require('express');
var timeout = require('connect-timeout');
var app = express();

app.get('/', function (req, res) {
  sleep(5000).then(function() {
    res.send('Hello World!');
  });
});

app.get('/customize_timeout', timeout('2s'), function (req, res) {
  sleep(5000).then(function() {
    res.send('Hello World!');
  });
});

app.get('/heavy_process', function (req, res) {
  req.setTimeout(0);
  sleep(600000).then(function() {
    res.send('Hello World!');
  });
});

app.listen(3333, function () {
  console.log('Example app listening on port 3333!');
});

function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
