var db = require('./models');

var new_show = {
  title: 'Stranger Things',
  numSeasons: 1,
  description: 'A group of kids investigate the mysterious disappearance of their friend. Winona Ryder acts at an 11',
  reasonItsGood: 'Great mystery that is never fully explained and a great deal of suspense keeps you on the edge of your seat',
  representativeImage: 'http://i.imgur.com/F98FVg3.png',
  // readerReview: 'Here is a sample review' throws error when I seed node.js and have this line included
};

db.Show.remove({}, function(err, show){
  console.log('removed all shows');
});

db.Show.create (new_show, function(err, show){
  if (err) {
    return console.log ("Seed data not working, Error:", err);
  }
  console.log('Created new show', show._id)
  process.exit();
})
