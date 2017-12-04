var express = require('express');
var app = express();
// var debug = require('debug')('demo2');
app.use(function (req, res, next) {
  // console.log('inside middle ware');
  req.info = 'mid';
  next();
});
app.get('/', function (req, res) {
  res.write(req.info + '\n');
  res.end('Hello World\n');
});

app.listen(3000);