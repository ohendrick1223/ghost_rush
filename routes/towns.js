//TODO:

//Post (photos/comments STRETCH)
//Post (new town STRETCH)


'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
// const { camelizeKeys, decamelizeKeys } = require('humps');
const router = express.Router();

router.get('/towns', (req, res, next) => {
  knex('towns')
  .orderBy('name')
  .then((data) => {
    const towns = data;
    res.send(towns)
  })
  .catch((err => {
    next(err);
  }));
});

router.get('/towns/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    return next();
  }

  knex('towns')
  .where('id', id)
  .then((data) => {
    if (!data) {
      throw boom.create(404, 'Not Found');
    }
    const town = data;

    res.send(town);
  })
  .catch((err) => {
    next(err);
  });
});

router.delete('/towns/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    return next ();
  }

  var town;

  knex('towns')
  .where('id', id)
  .then((data) => {
    if (!data) {
      throw boom.create(404, 'Not Found');
    }

    town = data;

    return knex('towns')
    .where('id', id)
    .del();
  })
  .then(() => {
    delete town.id;

    res.send(town);
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
