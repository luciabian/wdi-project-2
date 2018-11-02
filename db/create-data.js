const mongoose = require('mongoose');
const env = require('../config/environment');
mongoose.connect(env.dbUri);
const Instagram = require('../models/instagram');
const User = require('../models/user');

Instagram.collection.drop();
User.collection.drop();

const userData = [{
  username: 'Lucia',
  email: 'l@l.com',
  password: 'l'
}, {
  username: 'John',
  email: 'm@m.com',
  password: 'm'
}, {
  username: 'Mary',
  email: 'mary@mary.com',
  password: 'm'
}, {
  username: 'Alex',
  email: 'alex@alex.com',
  password: 'a'
}
];

User
  .create(userData)
  .then(users => {
    console.log(`${users.length} users created!`);
    Instagram
      .create([
        {
          addedBy: users[0],
          image: 'https://i.pinimg.com/564x/32/93/5d/32935d53aa6813a3cd0636dab86d8897.jpg',
          caption: 'Kangaroos!',
          location: 'Australia'
        }, {
          addedBy: users[1],
          image: 'https://i.pinimg.com/564x/1f/4f/1c/1f4f1cabb0570dee95a00b19ddfce95b.jpg',
          caption: 'Relax',
          location: 'Spain'
        }, {
          addedBy: users[2],
          image: 'https://i.pinimg.com/564x/5b/8b/54/5b8b54d120adb08f25d3ec5087b1c1ac.jpg',
          caption: 'Art',
          location: ''
        }, {
          addedBy: users[0],
          image: 'https://i.pinimg.com/564x/9b/9e/90/9b9e905b53c3a3d0f9a7bc8c51ea60d1.jpg',
          caption: 'Safari!',
          location: 'Africa'
        }, {
          addedBy: users[3],
          image: 'https://i.pinimg.com/564x/4c/4c/57/4c4c576e5fc4cad85d85e594df9f8441.jpg',
          caption: 'Pink dunes!',
          location: 'Africa'
        }
      ])
      .then(posts => {
        console.log(`${posts.length} posts created!`);
        mongoose.connection.close();
      });
  });
