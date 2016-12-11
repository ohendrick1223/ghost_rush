// //TODO: 1. Get route for getting a list of added towns on profile page
// //2. Post route for adding a ghost town to the profile page
// //3. Patch route for changing ghost town object/card from 'want to go' to 'been there' & vice versa.
// //4. Delete route for removing a town card/object from the list of 'want to go' & 'been there'
//
'use strict';

const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const router = express.Router();
//
const authorize = function(req, res, next) {
  const token = req.cookies.token;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(boom.create(401, 'Unauthorized'));
    }

    req.token = decoded;

    next();
  });
};

// router.get('/user_town_lists', authorize, (req, res, next) => {
//   knex('user_town_lists')
//     .innerJoin('towns', 'towns.id', 'user_town_lists.towns_id')
//     .where('user_town_lists.user_id', req.token.user_id)
//     .orderBy('towns.name', 'ASC')
//     .then((data) => {
//       const list = data;
//       console.log(list);
//       res.send(list);
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

//reference line 60 for fixing error.
router.post('/user_town_lists', (req, res, next) => {
  // console.log(req.body.towns_id);
  const towns_id = Number.parseInt(req.body.towns_id);
  const users_id = Number.parseInt(req.body.users_id);



  if (!Number.isInteger(towns_id)) {
    return next(boom.create(400, 'towns ID must be an integer'));
  }
  console.log(users_id);
  knex('towns')
    .where({
      'id': towns_id
    })
    .first()
    .then((towns) => {
      if (!towns) {
        throw boom.create(404, 'towns not found');
      }
      console.log(users_id);
//need to define users_id. Currently not posting.
      const insert_user_town_list = { towns_id
       };

      return knex('user_town_lists')
        .insert(insert_user_town_list), "*";
    })
    .then((data) => {
      const user_town_list = data[0];

      res.send(user_town_list);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
