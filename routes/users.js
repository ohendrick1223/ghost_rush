//TODO:
//patch (stretch) user can update email/username/pw/location

'use strict';

// const bcrypt = require('../bcrypt');
const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const router = express.Router();


//sign up/registraion route
router.post('/users', (req, res, next) => {
    const {
        username,
        email,
        password,
        location_city,
        location_state
    } = req.body;
    // console.log("i'm getting to the post");
    console.log(req.body.email);
    console.log(req.body.username);
    console.log(req.body.password);
    console.log(req.body.location_city);
    console.log(req.body.location_state);
    if (!email || !email.trim()) {
        return next(boom.create(400, 'Email must not be blank'));
    }
    if (!password || password.length < 8) {
        return next(boom.create(400, 'Password must at least 8 characters long'));
    }
    if (!username || !username.trim()) {
        return next(boom.create(400, 'Username must not be blank'));
    }
    if (!location_city || !location_city.trim()) {
        return next();
    }
    if (!location_state || !location_state.trim()) {
        return next();
    }
    knex('users')
        .select(knex.raw('1=1'))
        .where('email', email)
        .first()
        .then((exists) => {
            if (exists) {
                throw boom.create(400, 'Email already exists');
            }
            //Trying to get error handling for username to work, no luck so far, going to come back to this later if time permits.
            // knex('users')
            // .select(knex.raw('1=1'))
            // .where('username', username)
            // .first()
            // .then((alreadyExists) => {
            //   if(alreadyExists) {
            //     throw boom.create(400, 'Username already exists');
            //   }
            // })
            return bcrypt.hash(password, 12);
        })

    .then((hashed_password) => {
            const {
                username,
                email,
                location_city,
                location_state
            } = req.body;
            const insertUser = {
                username,
                email,
                location_city,
                location_state,
                hashed_password
            };

            return knex('users')
                .insert((insertUser), '*');
        })
        .then((data) => {
            const user = data[0];
            delete user.hashed_password;

            const expiry = new Date(Date.now() + 1000 * 60 * 60 * 3); //3 hour expiration
            const token = jwt.sign({
                    userId: user.id
                },
                process.env.JWT_SECRET, {
                    expiresIn: '3h'
                });

            res.cookie('token', token, {
                httpOnly: true,
                expires: expiry,
                secure: router.get('env') === 'production'
            });

            res.send(user);
        })
        .catch((err) => {
            next(err);
        });
});

//delete an entire user (need to add functionality for only admin privileges)
router.delete('/users/:id', (req, res, next) => {
const userID = parseInt(req.params.id);
knex('users')
    .del()
    .where({
        id: userID
    })
    .returning('*')
    .then((user) => {
        res.status(200).json({
            status: 'success',
            data: user
        });
    })
    .catch((err) => {
        res.status(500).json({
            status: 'error',
            data: err
        });
    });
});

//this route gets all users (TODO:create admin privileges, once we have admin page. Can admin access a page with list of users and/or can admin access profile pages of users(may be a stretch))
router.get('/users', (req, res, next) => {
  knex('users')
  .select('*')
  .then((users) => {
    res.status(200).json({
      status: 'success',
      data: users
    });
  })
  .catch((err) => {
    res.status(500).json({
      status: 'error',
      data: err
    });
  });
});

//this route gets a single user by id (TODO:only user logged in can access their information)
router.get('/users/:id', (req, res, next) => {
  const userID = parseInt(req.params.id);
  knex('users')
  .select('*')
  .where({
    id: userID
  })
  .then((users) => {
    res.status(200).json({
      status: 'success',
      data: users
    });
  })
  .catch((err) => {
    res.status(500).json({
      status: 'error',
      data: err
    });
  });
});

//STRETCH: Make a route/add to this delete route, the ability for admin to delete an entire user/get a list of the users.


module.exports = router;
