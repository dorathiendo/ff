var express = require('express');
var router = express.Router();
var _ = require('underscore');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cungleme',
  database: "fleetfoxes",
  dateStrings: 'date'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM posts ORDER BY date DESC', function (err, rows, fields) {
    if (err) throw err
    _.each(rows, function(row){
      row.date = new Date(row.date).toDateString();
    });
    res.render('news', { title: 'News', posts: rows });
  });
});

router.post('/', function (req, res) {
  switch(req.body.type){
    case 'text':
      req.body.content = '<p>' + req.body.content + '</p>';
          break;
    case 'video':
      req.body.content = '';
      break;
    case 'image':
      req.body.content = '';
  }
  var date = new Date();
  var params = {
    type: req.body.type,
    date: date,
    title: req.body.title,
    content: req.body.content
  };
  connection.query('INSERT INTO posts SET ?', params, function (err, rows) {
    if(err){
      res.status(400);
      res.send(err);
    } else {
      res.status(200);
      res.send('Post created');
    }
  });
});

module.exports = router;

