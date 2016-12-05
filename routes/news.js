var express = require('express');
var router = express.Router();
var handlebars = require('handlebars');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('news', { title: 'News' });
});

module.exports = router;
