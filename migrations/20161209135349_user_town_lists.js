'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_town_lists', (table) => {
    table.increments();
    table.boolean('visited').notNullable();
    table.integer('towns_id').notNullable().references('id').inTable('towns').onDelete('CASCADE');
    table.integer('users_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('user_town_lists');
};
