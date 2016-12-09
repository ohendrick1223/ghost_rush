'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('towns', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('Unnamed ghost town');
    table.integer('yr_est').defaultTo();
    table.integer('yr_abnd').defaultTo();
    table.text('description_then').defaultTo('');
    table.text('description_now').defaultTo('');
    table.string('cemetery').defaultTo('');
    table.text('mineral_found').defaultTo('');
    table.boolean('tour_avail');
    table.decimal('longitude');
    table.decimal('latitude');
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('towns');
};
