'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('photos').insert({
          id: 1,
          towns_id: 1,
          users_id: 1,
          photo_url: 'https://cdn-co.milespartnership.com/sites/default/master/files/styles/media-player-large/public/Casinos1_CentralCity_MI.jpg'
        }),

      ]);
    });
};
