'use strict';

const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const router = express.Router();


//login route!
router.post('/auth', (req, res, next) => {
    //console.log("I'm getting to the post");
    const {
        email,
        password
    } = req.body;
    //console.log("Im getting past the variables");
    if (!email || !email.trim()) {
        console.log("I'm getting past evaluation");
        return next(boom.create(400, 'Email must not be blank'));
    }
    //console.log("Im getting past email");
    if (!password || password.length < 8) {
        return next(boom.create(400, 'Password must not be blank'));
    }
    //console.log("getting past password");
    let user;

    knex('users')
        .where('email', email)
        .first()
        .then((data) => {
            if (!data) {
                throw boom.create(400, 'Please enter a better email or password');
            }

            user = data;

            return bcrypt.compare(password, user.hashed_password);
        })
        .then((password) => {
            if (password === true) {
                delete user.hashed_password;

                const expiry = new Date(Date.now() + 1000 * 60 * 60 * 3); // 3 hours
                const token = jwt.sign({
                    userId: user.id,
                    is_admin: user.is_admin,
                    email: user.email
                }, process.env.JWT_SECRET, {
                    expiresIn: '3h'
                }); //Tested on postman, this works for now. May need to make test to make sure.

                res.cookie('token', token, {
                    httpOnly: true,
                    expires: expiry,
                    secure: router.get('env') === 'production'
                });
                console.log(res.cookie);
                res.send(user);
            } else {
                next(boom.create(400, 'Bad email or password'));
            }
        })
        .catch(bcrypt.MISMATCH_ERROR, () => {
            throw boom.create(400, 'Bad email or password');
        })
        .catch((err) => {
            next(err);
        });
});

router.delete('/auth/:id', (req, res) => {
  console.log(res.cookie);
  res.clearCookie('token');
  res.send(true);
});


module.exports = router;
