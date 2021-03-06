var debug = require('debug')('log');
var express = require('express');
var fs = require('fs');
var app = express();

app.use(function (req, res, next) {
  res.render = function (filename, options) {
    debug('log:' + 'inside render');
    debug('log:' + filename);
    debug('log:' + options);
    fs.readFile('templates/main.html', function (err, data) {
      if (err) {
        debug('log:' + err);
        return;
      }
      var content = String(data);
      var test = /{{(.*)}}/.test(content);
      debug('log:' + test);
      if (test) {
        debug('log:' + RegExp.$1);
        var key = RegExp.$1;
        if (key && options[key]) {
          content = content.replace('{{' + key + '}}', options[key]);
        }
      }
      res.write(content);
      res.end();
    });
  };
  next();
});
app.get('/', function (req, res) {
  res.render('main.html', { name: 'Greate' });
});
app.listen(3000);