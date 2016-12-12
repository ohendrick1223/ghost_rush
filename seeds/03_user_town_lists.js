'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_town_lists').del()
    .then(function () {
      return Promise.all([
        knex('user_town_lists').insert({
          id: 1,
          visited: true,
          towns_id: 3,
          users_id: 1
        }),

      ]);
    });
};
