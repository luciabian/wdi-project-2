const Instagram = require('../models/instagram');

//INDEX FUNCTION
function indexRoute(req, res) {
  Instagram.find().then(function(result) {
    const instagramObject = {
      instagram: result
    };
    res.render('instagram/index', instagramObject);
  });
}

//NEW FUNCTION
function newRoute(req, res) {
  res.render('instagram/new');
}

//CREATE FUNCTION
function createRoute(req, res) {
  Instagram.create(req.body)
    .then(result => res.redirect(`/instagram/${result._id}`));
}

//SHOW FUNCTION
function showRoute(req, res) {
  Instagram.findById(req.params.id)
    .populate('comments.user')
    .then(result => {
      res.render('instagram/show', result);
    });
}

//UPDATE FUNCTION
function updateRoute(req, res) {
  Instagram.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect('/');
    });
}

//EDIT FUNCTION
function editRoute(req, res) {
  Instagram.findById(req.params.id)
    .then(result => {
      res.render('instagram/edit', result);
    });
}

//DELETE FUNCTION
function deleteRoute(req,res) {
  Instagram.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/'));
}

module.exports = {
  indexRoute: indexRoute,
  showRoute: showRoute,
  newRoute: newRoute,
  createRoute: createRoute,
  editRoute: editRoute,
  updateRoute: updateRoute,
  deleteRoute: deleteRoute
};
