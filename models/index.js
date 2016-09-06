var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api");

module.exports.Show = require('./shows.js');
module.exports.readerReview = require('./readerReview.js');
