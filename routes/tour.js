var express = require('express');
var router = express.Router();
var _ = require('underscore');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cungleme',
  database: "fleetfoxes"
});

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM tour', function (err, rows, fields) {
    if (err) throw err
    _.each(rows, function(row){
      row.date = row.date.toDateString();
    });
    res.render('tour', { title: 'Tour', events: rows });
  });

});

module.exports = router;
