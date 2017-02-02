var express = require('express');
var router = express.Router();
var handlebars = require('handlebars');
var async = require('async');
var mysql = require('mysql');
var _ = require('underscore');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cungleme',
  database: "fleetfoxes"
});

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM music', function (err, rows, fields) {
    if (err) throw err
    _.each(rows, function(row){
      row.tracklist = JSON.parse(row.tracklist);
    });
    res.render('music', { title: 'Music', albums: rows});
  });
});

module.exports = router;