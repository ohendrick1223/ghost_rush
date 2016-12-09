'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('towns').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('towns').insert(
          {
            id: 1,
            name: 'Central City',
            yr_est: 1859,
            yr_abnd: 'Still Alive' ,
            description_then: "Founded in 1859, it soon acquired the reputation of being in the middle of 'the richest square mile on earth.' By the end of its second year, most of the placer gold was gone which forced hard rock mining into being. Over speculation of some mining stocks created a real depression for a while, but the area survived and had good years during the '70s and '80s. Like most other mining towns of the era, Central City had its share of fires that ultimately resulted in brick being the material of choice with which to rebuild the town.",
            description_now: "Founded in 1859, it soon acquired the reputation of being in the middle of 'the richest square mile on earth.' By the end of its second year, most of the placer gold was gone which forced hard rock mining into being. Over speculation of some mining stocks created a real depression for a while, but the area survived and had good years during the '70s and '80s. Like most other mining towns of the era, Central City had its share of fires that ultimately resulted in brick being the material of choice with which to rebuild the town.",
            cemetery: 'Yes',
            mineral_found: 'Gold',
            tour_avail: true,
            longitude: -105.514164,
            latitude: 39.801932
          }),
          knex('towns').insert(
            {
              id: 2,
              name: 'Teller City',
              yr_est: 1879,
              yr_abnd: 1884,
              description_then: 'By 1882, population exceeded 1800. 40 room hotel, 27 saloons, hundreds of log cabins',
              description_now: 'Numerous remains of log cabins; property off limits due to beetle kill prevention efforts',
              cemetery: 'No',
              mineral_found: 'Silver',
              tour_avail: false,
              longitude: -105.076354,
              latitude: 39.681111
            }),
          knex('towns').insert(
              {
                id: 3,
                name: 'Silver Plume',
                yr_est: 1870,
                yr_abnd: 'Still Alive',
                description_then: "Had own newspaper, The Coloradoan. Known for miner who's fiance died the eve of their wedding. He retired to his cabin nightly to drink and play the violin. The townspeople would listen to him until one day, the final violin note was followed by a gunshot. The miner was found with a bullet through his heart and burial instructions he wrote.",
                description_now: "Numerous buildings still stand including a church, school, playhouse, jail, grocery store",
                cemetery: 'Yes',
                mineral_found: 'Silver',
                tour_avail: false,
                longitude: -105.725839,
                latitude: 39.696098
              }),
            knex('towns').insert(
                {
                  id: 4,
                  name: 'Independence',
                  yr_est: 1879,
                  yr_abnd: 1899,
                  description_then: 'Legend has it that prospectors discovered the Independence Gold Lode on July 4, 1879. A tent city sprang up that summer, and by 1880 there were 300 people living in the camp.  By 1882 the Town of Independence had over 40 businesses with three post offices and an estimated population of 1,500. A miner could get room and board for $2 at the New England House, a boarding house on the east end of Main Street.',
                  description_now: 'During the winter of 1899 the worst storm in Colorado’s history cut off the supply routes to Independence. The miners, who were running out of food, proceeded to dismantle their homes to make 75 pairs of skis and to escape en masse to Aspen. They made light of their adventure by making it a race of the Hunter’s Pass Ski Club—entry fee: one ham sandwich.',
                  cemetery: 'No',
                  mineral_found: 'Gold',
                  tour_avail: true,
                  longitude: -81.637903,
                  latitude: 41.368665
                })
      ]);
    })
    .then(() => {
  return knex.raw(
    "SELECT setval('towns_id_seq', (SELECT MAX(id) FROM towns));"
  );
});
};
