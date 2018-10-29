const mongoose = require('mongoose');

const instagramSchema = mongoose.Schema({
  image: String,
  comment: String,
  time: { type: Date, default: Date.now },
  location: String,
  comments: [
    {
      content: String,
      user: String
    }
  ]
});

const instagramModel = mongoose.model('Instagram', instagramSchema);
module.exports = instagramModel;
