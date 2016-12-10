//TODO: post new user (route /signup(registration))
// get route for users to get their user info/profile
//patch (stretch) user can update email/username/pw/location
//Delete-user can delete their profile & Admin can delete all

'use strict';

const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const router = express.Router();


//sign up/registraion route
router.post('/users', (req, res, next) => {
  const { username, email, password, location_city, location_state } = req.body;
console.log("i'm getting to the post");
console.log(req.body.email);
  if(!email || !email.trim()) {
    return next(boom.create(400, 'Email must not be blank'));
  }
  if(!password || password.length < 8) {
    return next(boom.create(400, 'Password must at least 8 characters long'));
  }
  if(!username || !username.trim()) {
    return next(boom.create(400, 'Username must not be blank'));
  }

  knex('users')
  .select(knex.raw('1=1'))
  .where('email', email)
  .first()
  .then((exists) => {
    if (exists) {
      throw boom.create(400, 'Email already exists');
    }
    return bcrypt.hash(password, 12);
  })

  .then((hashed_password) => {
    const { username, email, location_city, location_state } = req.body;
    const insertUser = {  username, email, hashed_password, location_city, location_state };

    return knex('users')
    .insert((insertUser), '*');
  })
  .then((data) => {
    const user = data[0];
    delete user.hashed_password;

    const expiry = new Date(Date.now() + 1000 * 60 * 60 * 3); //3 hour expiration
    const token = jwt.sign({
      userId: user.id },
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
    .catch((err)=> {
      next(err);
    });
  });

module.exports = router;
