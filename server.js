var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.use(express.static('dist'));
app.use(express.static('node_modules/jquery/dist'));
app.use(express.static('node_modules/bootstrap/dist'));

app.get('/', function (req, res) {
  res.render('index');
});
app.get('/live', function (req, res) {
  res.render('live');
});

var server = app.listen(process.env.PORT || 3000, function () {
  var port = server.address().port;
  console.log('Example app listening on port:%s',  port);
});
