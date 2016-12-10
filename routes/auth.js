//TODO:
//post user (login)
//delete user (log out)
'use strict';

const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const router = express.Router();

//check for token route!
router.get('/auth', (req, res) => {
    const token = req.cookies.token;

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.send(false);
        }

        res.send(true);
    });
});

//login route!
router.post('/auth', (req, res, next) => {
    console.log("I'm getting to the post");
    const {
        username,
        email,
        password
    } = req.body;
    console.log("Im getting past the variables");
    if (!email || !email.trim()) {
        console.log("I'm getting past evaluation");
        return next(boom.create(400, 'Email must not be blank'));
    }
    console.log("Im getting past email");
    if (!password || password.length < 8) {
        return next(boom.create(400, 'Password must not be blank'));
    }
    console.log("getting past password");
    if (!username) {
        return next(boom.create(400, 'Username must not be blank'));
    }

    let user;

    knex('users')
        // .where('username', username)
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
                    userId: user.id
                }, process.env.JWT_SECRET, {
                    expiresIn: '3h'
                }); //Tested on postman, this works for now. May need to make test to make sure.

                res.cookie('token', token, {
                    httpOnly: true,
                    expires: expiry,
                    secure: router.get('env') === 'production'
                });
                console.log(user);
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



module.exports = router;
