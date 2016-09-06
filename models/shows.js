var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  readerReview = require('./readerReview');

var ShowSchema = new Schema({
  title: String,
  numSeasons: Number,
  description: String,
  reasonItsGood: String,
  representativeImage: String,
  readerReview: {type: Schema.Types.ObjectId, ref: 'readerReview'}
});

var Show = mongoose.model('Show', ShowSchema);

module.exports = Show;
