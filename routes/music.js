var express = require('express');
var router = express.Router();
var handlebars = require('handlebars');

var albums = [
  {
    albumImage: 'https://upload.wikimedia.org/wikipedia/en/0/01/Fleet_foxes.jpg',
    tracklist: ['Sun It Rises','Sun It Rises','Sun It Rises','Sun It Rises','Sun It Rises']
  },
  {
    albumImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/FleetFoxesHelplessness_Blues2011.jpg/440px-FleetFoxesHelplessness_Blues2011.jpg',
    tracklist: ['Sun It Rises','Sun It Rises','Sun It Rises','Sun It Rises','Sun It Rises']
  },
  {
    albumImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/FleetFoxesHelplessness_Blues2011.jpg/440px-FleetFoxesHelplessness_Blues2011.jpg',
    tracklist: ['Sun It Rises','Sun It Rises','Sun It Rises','Sun It Rises','Sun It Rises']
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('music', { title: 'Music', albums: albums });
});

module.exports = router;
