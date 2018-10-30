const Instagram = require('../models/instagram');

function createRoute(req,res) {
  Instagram.findById(req.params.instagramId)
    .then(instagram => {
      instagram.comments.push(req.body);
      instagram.save().then(() => res.redirect(`/instagram/${instagram.id}`));
    });
}

function deleteRoute(req, res) {
  Instagram.findById(req.params.instagramId)
    .then(instagram => {
      instagram.comments.id(req.params.commentId).remove();
      instagram.save()
        .then(() => res.redirect(`/instagram/${req.params.instagramId}`));
    });
}

module.exports = {
  createRoute: createRoute,
  deleteRoute: deleteRoute
};
