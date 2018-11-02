const mongoose = require('mongoose');

const instagramSchema = mongoose.Schema({
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  image: String,
  caption: String,
  time: { type: Date, default: Date.now },
  location: String,
  comments: [
    {
      user: { type: mongoose.Schema.ObjectId, ref: 'User' },
      content: { type: String }
    }
  ]
});

const instagramModel = mongoose.model('Instagram', instagramSchema);
module.exports = instagramModel;
