const mongoose = require('mongoose');

const instagramSchema = mongoose.Schema({
  id: String,
  image: String,
  username: String,
  date: Number,
  location: String,
  comments: [
    {
      content: String,
      username: String
    }
  ]
});

const instagramModel = mongoose.model('Instagram', instagramSchema);
module.exports = instagramModel;
