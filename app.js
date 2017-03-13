var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('First nodejs program, HI~');
});

app.listen(3000, function(){
  console.log('Server On!');
});
