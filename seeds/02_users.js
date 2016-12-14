'use strict';
var bcrypt = require('bcrypt');
  exports.seed = function (knex, Promise){
    var hash_pass = bcrypt.hashSync('thisispassword', 8);

    return knex('users')
    .insert(
      {
        id: 1,
        username: 'admin',
        email: 'admin@email.com',
        hashed_password: hash_pass,
        is_admin: true,
        location_city: 'Boulder',
        location_state: 'Colorado'
        })

    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
  };






// var bcrypt = require('bcrypt');
// exports.seed = function(knex, Promise) {
//
//   var hash_pass = bcrypt.hashSync('thisispassword', 8);
//
//   return knex('users').del()
//     .then(function () {
//       return Promise.all([
//         knex('users').insert(
//           {
//             id: 1,
//             username: 'admin',
//             email: 'admin@email.com',
//             hashed_password: '',
//             is_admin: true,
//             location_city: 'Boulder',
//             location_state: 'Colorado'
//           }),
//
//       ]);
//     })
// };
