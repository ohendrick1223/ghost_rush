'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();

app.disable('x-powered-by');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');

switch (app.get('env')) {
  case 'development':
    app.use(morgan('dev'));
    break;

  case 'production':
    app.use(morgan('short'));
    break;

  default:
}

app.use(bodyParser.json());
app.use(cookieParser());

const path = require('path');

app.use(express.static(path.join('public')));

// CSRF protection
// Look into this
// app.use((req, res, next) => {
//   if (/json/.test(req.get('Accept'))) {
//     return next();
//   }
//
//   res.sendStatus(406);
// });

const auth = require('./routes/auth');
const users = require('./routes/users');
const towns = require('./routes/towns');
const user_town_lists = require('./routes/user_town_lists');

//testing for heroku deployment Monday night
// const authorize = function(req, res, next) {
//   const token = req.cookies.token;
//
//   //TODO:If a token exists - decode it and add the contents to req.user
//
//   //TODO:If no token exists - do nothing (i.e. next());
//
//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//       if (token) {
//         req.user = decoded;
//         console.log(req.user);
//       }
//       next();
//   });
// };

app.use(auth);
app.use(users);
app.use(towns);
app.use(user_town_lists);

app.use((_req, res) => {
  res.sendStatus(404);
});

//TODO: ask teachers about this functionality
// router.use(function(req, res, next) {
//     if (!req.user.isAdmin) {
//         res.sendStatus(401)
//     } else {
//         next();
//     }
// });

// eslint-disable-next-line max-params
app.use((err, _req, res, _next) => {
  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }
  // eslint-disable-next-line no-console
  console.error(err.stack);
  res.sendStatus(500);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  if (app.get('env') !== 'test') {
    // eslint-disable-next-line no-console
    console.log('Listening on port', port);
  }
});

module.exports = app;
