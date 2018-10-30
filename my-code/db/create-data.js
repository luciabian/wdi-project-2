const mongoose = require('mongoose');
const env = require('../config/environment');
mongoose.connect(env.dbUri);
const Instagram = require('../models/instagram');
const User = require('../models/user');

Instagram.collection.drop();
User.collection.drop();

const instagramData = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Bramble_Cocktail1.jpg/440px-Bramble_Cocktail1.jpg',
    caption: 'Look at this amazing cocktail I just had',
    location: 'London'
  }
];

Instagram.create(instagramData)
  .then(result => {
    console.log(`${result.length} posts created!`);
    mongoose.connection.close();
  });
