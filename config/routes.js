const instagramController = require('../controllers/instagramController');
const authController = require('../controllers/authController');
const commentsController = require('../controllers/commentsController');
const userController = require('../controllers/userController');
const secureRoute = require('../lib/secureRoute');
const router = require('express').Router();

//PROFILE SHOW ROUTE

router.get('/profile/:id', secureRoute, userController.show);

//REGISTER ROUTES
router.get('/register', authController.registerFormRoute);
router.post('/register', authController.registerRoute);

//LOGIN ROUTES
router.get('/login', authController.loginFormRoute);
router.post('/login', authController.loginRoute);

//LOGOUT ROUTE
router.get('/logout', authController.logoutRoute);

//HOME ROUTES
router.get('/', function(req, res){
  res.render('pages/home');
});

//EXPLORE ROUTES
router.get('/explore', function(req, res) {
  res.render('pages/explore');
});

//INDEX ROUTE
router.get('/instagram', instagramController.indexRoute);

//NEW ROUTE
router.get('/instagram/new', secureRoute, instagramController.newRoute);

//CREATE ROUTE
router.post('/instagram', secureRoute, instagramController.createRoute);

//SHOW ROUTE
router.get('/instagram/:id', instagramController.showRoute);

//UPDATE ROUTE
router.put('/instagram/:id', secureRoute, instagramController.updateRoute);

//EDIT ROUTE
router.get('/instagram/:id/edit', secureRoute, instagramController.editRoute);

//DELETE ROUTE
router.delete('/instagram/:id', secureRoute, instagramController.deleteRoute);

//COMMENTS CREATE ROUTE
router.post('/instagram/:instagramId/comments', secureRoute, commentsController.createRoute);

//COMMENTS DELETE ROUTE
router.delete('/instagram/:instagramId/comments/:commentId', secureRoute, commentsController.deleteRoute);


module.exports = router;
