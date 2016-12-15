//TODO://Post (photos/comments STRETCH)

'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const router = express.Router();

//this route gets a list of all towns
router.get('/towns', (req, res, next) => {
    knex('towns')
        .orderBy('id')
        .then((data) => {
            const towns = data;
            res.send(towns);
        })
        .catch((err => {
            next(err);
        }));
});

//this route gets any town by id
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

//this route deletes a town by id, TODO:need to add permissions for only an admin to have access to deleting a town.
router.delete('/towns/:id', (req, res, next) => {
    const id = Number.parseInt(req.params.id);

    if (Number.isNaN(id)) {
        return next();
    }
    let town;

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
