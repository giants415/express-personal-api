var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  review: String
});

var readerReview = mongoose.model('readerReview', AuthorSchema);

module.exports = readerReview;
