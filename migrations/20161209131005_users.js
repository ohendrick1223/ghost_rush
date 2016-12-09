'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('username').notNullable();
    table.string('email').notNullable().unique();
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.boolean('is_admin').notNullable().defaultTo(false);
    table.string('location_city');
    table.string('location_state');
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('users');
};
