const User = require('../models/user');

function userShow(req, res, next) {
  User.findById(req.params.id)
    .populate('comments addedPosts')
    .then(user => {
      console.log('====>', user);
      res.render('pages/profile', user);
    })
    .catch(err => {
      console.log('This is the err', err);
      next();
    });
}


module.exports = {
  show: userShow
};
