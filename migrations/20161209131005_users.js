'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('towns', (table) => {
    table.increments();
    table.
  })
};

exports.down = function(knex, Promise) {

};
