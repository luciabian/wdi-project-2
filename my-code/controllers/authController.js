const User = require('../models/user');

//NEW REGISTRATION
function registerFormRoute(req, res) {
  res.render('auth/register');
}

//CREATE REGISTRATION
function registerRoute(req, res) {
  User.create(req.body)
    .then(result => {
      res.redirect('/login');
    });
}

//NEW LOGIN
function loginFormRoute(req, res) {
  res.render('auth/login');
}

//CREATE LOGIN
function loginRoute(req, res) {
  User.findOne({ email: req.body.email })
    .then(result => {
      if (!result) {
        res.redirect('/login');
      } else {
        req.session.userId = result._id;
        res.redirect('/');
      }
    });
}

//LOGOUT
function logoutRoute(req, res) {
  req.session.regenerate(function() {
    res.redirect('/');
  });
}

module.exports = {
  registerFormRoute: registerFormRoute,
  registerRoute: registerRoute,
  loginFormRoute: loginFormRoute,
  loginRoute: loginRoute,
  logoutRoute: logoutRoute
};
