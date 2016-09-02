// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }
//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })


var db = require('./models');

var new_show = {
  title: 'Stranger Things',
  numSeasons: 1,
  description: 'A group of kids investigate the mysterious disappearance of their friend. Winona Ryder acts at an 11',
  reasonItsGood: 'Great mystery that is never fully explained and a great deal of suspense keeps you on the edge of your seat',
  representativeImage: 'http://i.imgur.com/F98FVg3.png'
};

db.Show.remove({}, function(err, show){
  console.log('removed all shows');
});
  // books_list.forEach(function (bookData) {
  //   var book = new db.Book({
  //     title: bookData.title,
  //     image: bookData.image,
  //     releaseDate: bookData.releaseDate

db.Show.create (new_show, function(err, show){
  if (err) {
    return console.log ("Seed data not working, Error:", err);
  }
  console.log('Created new show', show._id)
  process.exit();
})
