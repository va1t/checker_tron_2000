var express = require('express');
var app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
  res.sendStatus(200);  
});

app.post('/move', function(req, res) {
  console.log(req.body);
  res.header(200).send(req.body);
});

app.listen(3000, function() {
  console.log('Listening on port 3000..');
})