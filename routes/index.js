var express = require('express');
var router = express.Router();
var handlebars = require('handlebars');

var posts = [
  {
    type: 'text',
    title: 'Hey!',
    content: '<p>Microdosing kinfolk roof party, bicycle rights waistcoat glossier bitters helvetica paleo portland. Snackwave blue bottle pug biodiesel humblebrag. Mlkshk beard lomo chia. Microdosing taxidermy jianbing migas. Gentrify green juice listicle pickled, taxidermy gluten-free microdosing post-ironic. Green juice offal single-origin coffee messenger bag truffaut heirloom. Twee semiotics beard, kogi pork belly drinking vinegar tbh activated charcoal.</p>',
    date: '10/10/15',
    height: Math.floor(Math.random()*11)*10 + 'px',
    width: Math.floor(Math.random()*11)*10 + 'px'
  },
  {
    type: 'video',
    content: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DT-dxG4WWf4?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
    date: '10/10/15',
  },
  {
    type: 'image',
    content: '<img src="https://i.ytimg.com/vi/DrQRS40OKNE/maxresdefault.jpg" alt=""/>',
    date: '10/10/15',
  },
  {
    type: 'music',
    content: '<iframe src="https://embed.spotify.com/?uri=spotify:track:5oYkuJL2VQ3Ss2oxNuRk3L" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>',
    date: '10/10/15',
  },
  {
    type: 'text',
    title: 'Hey!',
    content: 'Microdosing kinfolk roof party, bicycle rights waistcoat glossier bitters helvetica paleo portland. Snackwave blue bottle pug biodiesel humblebrag. Mlkshk beard lomo chia. Microdosing taxidermy jianbing migas. Gentrify green juice listicle pickled, taxidermy gluten-free microdosing post-ironic. Green juice offal single-origin coffee messenger bag truffaut heirloom. Twee semiotics beard, kogi pork belly drinking vinegar tbh activated charcoal.',
    date: '10/10/15',
  },
  {
    type: 'video',
    content: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DT-dxG4WWf4?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
    date: '10/10/15',
  },
  {
    type: 'release',
    content: '<img src="https://upload.wikimedia.org/wikipedia/en/0/01/Fleet_foxes.jpg" />',
    date: '10/10/15',
  },
  {
    type: 'text',
    title: 'Hey!',
    content: 'Microdosing kinfolk roof party, bicycle rights waistcoat glossier bitters helvetica paleo portland. Snackwave blue bottle pug biodiesel humblebrag. Mlkshk beard lomo chia. Microdosing taxidermy jianbing migas. Gentrify green juice listicle pickled, taxidermy gluten-free microdosing post-ironic. Green juice offal single-origin coffee messenger bag truffaut heirloom. Twee semiotics beard, kogi pork belly drinking vinegar tbh activated charcoal.',
    date: '10/10/15',
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '', posts: posts});
});

router.get('/posts', function(req, res, next) {
  res.send(smallPosts);
});

module.exports = router;
