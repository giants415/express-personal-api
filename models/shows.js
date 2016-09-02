// var mongoose = require('mongoose'),
//   Schema = mongoose.Schema;

// var CampsiteSchema = new Schema({
//   description: String
// });

// var Campsite = mongoose.model('Campsite', CampsiteSchema);

// module.exports = Campsite;

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ShowSchema = new Schema({
  title: String,
  numSeasons: Number,
  description: String,
  reasonItsGood: String,
  representativeImage: String
});

var Show = mongoose.model('Show', ShowSchema);

module.exports = Show;
