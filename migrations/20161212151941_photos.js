
'use strict';
exports.up = function(knex, Promise) {
  // return knex.schema.createTable('photos', (table) => {
  //   table.increments();
  //   table.integer('towns_id').notNullable().references('id').inTable('towns').onDelete('cascade');
  //   table.integer('users_id').defaultTo().references('id').inTable('users').onDelete('cascade');
  //   table.text('photo_url').notNullable().defaultTo('No photo available');
  //
  // });
};

exports.down = function(knex, Promise) {
// return knex.schema.dropTable('photos');
};
