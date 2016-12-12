'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert(
          {
            id: 1,
            username: 'admin',
            email: 'admin@email.com',
            hashed_password: '',
            is_admin: true,
            location_city: 'Boulder',
            location_state: 'Colorado'
          }),

      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
