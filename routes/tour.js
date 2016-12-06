var express = require('express');
var router = express.Router();
var handlebars = require('handlebars');

var events = [];
for(var i = 0; i < 20; i++){
  events.push({
    date: new Date().toDateString(),
    name: 'Outside Lands Festival',
    location: 'San Francisco, CA, USA',
    url: 'google.com',
  });
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tour', { title: 'Tour', events: events });
});

module.exports = router;
