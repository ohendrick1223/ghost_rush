'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_town_lists').del()
    .then(function () {
      return Promise.all([
        knex('user_town_lists').insert({
          id: 1,
          visited: false,
          towns_id: 1,
          users_id: 1
        }),
      ]);
    })
      .then(function() {
        return knex.raw("SELECT setval('user_town_lists_id_seq', (SELECT MAX(id) FROM user_town_lists))");
    });
};
