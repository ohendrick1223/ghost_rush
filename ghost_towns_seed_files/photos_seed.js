'use strict';

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('photos').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('photos').insert({
                    id: 1,
                    photo_url: 'http://www.legendsofamerica.com/photos-centralcity/CentralCityPostcard.jpg'
                }),
                knex('photos').insert({
                    id: 2,
                    photo_url: 'http://www.passportintime.com/images/co01_mb-r_tellercity_oldhot.jpg'
                }),
                knex('photos').insert({
                    id: 3,
                    photo_url: 'http://www.uncovercolorado.com/wp-content/uploads/2011/11/2011-11-16_Silver-Plume-Main-Street-Sign-1000x500-650x325.jpg'
                }),
                knex('photos').insert({
                    id: 4,
                    photo_url: 'https://en.wikipedia.org/wiki/File:Abandoned_log_cabins,_Independence,_CO.jpg'
                }),
                knex('photos').insert({
                    id: 5,
                    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Crystal_Mill%2C_Colorado.jpg/800px-Crystal_Mill%2C_Colorado.jpg'
                }),
                knex('photos').insert({
                    id: 6,
                    photo_url: 'http://aspenhistory.org/wp-content/uploads/2015/07/tours-museum_images_ashcroft41.jpg'
                }),
                knex('photos').insert({
                    id: 7,
                    photo_url: 'https://static1.squarespace.com/static/5537f7d8e4b0dacdf31a3305/t/56c14133cf80a1dd4319c578/1455505765867/Cash-Williams+Building+St+Elmo+Colorado'
                }),
                knex('photos').insert({
                    id: 8,
                    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/2006-07-19_Animas_Forks%2C_Colorado.jpg/1920px-2006-07-19_Animas_Forks%2C_Colorado.jpg'
                }),
                knex('photos').insert({
                    id: 9,
                    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/DSCN3044_gilmancliff_e_600.jpg/550px-DSCN3044_gilmancliff_e_600.jpg'
                }),
                knex('photos').insert({
                    id: 10,
                    photo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/CaribouCO-2005.jpg/220px-CaribouCO-2005.jpg'
                }),
                knex('photos').insert({
                    id: 11,
                    photo_url: 'http://i.imgur.com/M5kL71b.jpg'
                }),
                knex('photos').insert({
                    id: 12,
                    photo_url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQCaUz-6a0UIrjL3lQM4POBV4PJATxYruDg7R46szGGSOZnLLb7Kw'
                })
            ]);
        })
        .then(() => {
            return knex.raw(
                "SELECT setval('photos_id_seq', (SELECT MAX(id) FROM photos));"
            );
        });
};
