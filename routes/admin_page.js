'use strict';


const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const router = express.Router();

router.get('/', (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
          if (err) {
              res.redirect('../map.html');
          }
          req.user = decoded;
          console.log(req.user);
          if(req.user.is_admin){
            res.redirect('../admin_page.html')
          }else{
            res.redirect('../map.html')
          }
      });
  } else {
      next();
  }
});

router.delete('/users/:id',(req, res, next) => {
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



module.exports = router;
