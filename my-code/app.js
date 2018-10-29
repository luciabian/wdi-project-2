const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const auth = require('./lib/auth');
const session = require('express-session');

const mongoose = require('mongoose');
const env = require('./config/environments');
const router = require('./config/router');

mongoose.connect(env.dbUri);

const app = express();
app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({ secret: 'shh...', resave: false, saveUninitialized: false}));

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static('public'));

app.use('*', auth.checkAuthStatus);
app.use(router);


app.listen(env.port, () => console.log(`Listening for changes on port ${env.port}`));
