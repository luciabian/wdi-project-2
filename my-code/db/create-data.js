const mongoose = require('mongoose');
const env = require('../config/environment');
mongoose.connect(env.dbUri);
const Instagram = require('../models/instagram');

Instagram.collection.drop();

const instagramData = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Bramble_Cocktail1.jpg/440px-Bramble_Cocktail1.jpg',
    comment: 'Look at this amazing cocktail I just had',
    location: 'London'
  }
];

Instagram.create(instagramData)
  .then(result => {
    mongoose.connection.close();
  });
