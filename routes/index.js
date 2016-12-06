var express = require('express');
var router = express.Router();
var handlebars = require('handlebars');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: ''});
});

router.get('/posts', function(req, res, next) {
  res.send(smallPosts);
});

module.exports = router;
