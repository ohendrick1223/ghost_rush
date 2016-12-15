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
const knex = require('knex');

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
app.use(bodyParser.urlencoded({ extended: false }))

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

const users = require('./routes/users');
const auth = require('./routes/auth');
const towns = require('./routes/towns');
const user_town_lists = require('./routes/user_town_lists');
const admin_page = require('./routes/admin_page');


//auth setup

// const authorize = function(req, res, next) {
//     const token = req.cookies.token;
//     console.log(token);
//     if (token) {
//         jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//             if (err) {
//                 res.redirect('../map.html');
//             }
//             req.user = decoded;
//             console.log(req.user);
//             next();
//         });
//     } else {
//         next();
//     }
// };

// app.get('/admin_page', authorize, function(req, res, next) {
//     if (!req.user) {
//         res.redirect('../map.html');
//     } else {
//         next();
//     }
// });


app.use(express.static('./public'));


app.use(users);
app.use(auth);
app.use(towns);
app.use(user_town_lists);
app.use('/admin_page', admin_page);

app.use((_req, res) => {
    res.sendStatus(404);
});



app.use((err, _req, res, _next) => {
    if (err.output && err.output.statusCode) {
        return res
            .status(err.output.statusCode)
            .set('Content-Type', 'text/plain')
            .send(err.message);
    }

    console.error(err.stack);
    res.sendStatus(500);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    if (app.get('env') !== 'test') {
        console.log('Listening on port', port);
    }
});

module.exports = app;
