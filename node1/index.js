var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false});
app.set('view engine', 'ejs');

app.use('/assets', express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.post('/about', urlencodedParser, function(req, res) {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  res.render('about-success', {data: req.body});
});

app.get('/news', function(req, res) {
  res.sendFile(__dirname + "/news.html");
});

app.get('/news/:id', function(req, res) {
  var obj = {title: "Новость", id: 4, paragraphs: ['Парфграф', 'Обычный текст', 'Числа 2, 3, 5', 99]};
  res.render('news', {newsId: req.params.id, obj: obj});
});

app.listen(3000);
