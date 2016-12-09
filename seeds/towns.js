
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('towns').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('towns').insert(
          {
            id: 1,
            name:
            yr_est:
            yr_abnd:
            description_then:
            description_now:
            cemetery:
            mineral_found:
            tour_avail:
            longitude:
            latitude:
          }),

          knex('towns').insert(
            {
              id: 2,
              name:
              yr_est:
              yr_abnd:
              description_then:
              description_now:
              cemetery:
              mineral_found:
              tour_avail:
              longitude:
              latitude:
            }),

          knex('towns').insert(
              {
                id: 3,
                name:
                yr_est:
                yr_abnd:
                description_then:
                description_now:
                cemetery:
                mineral_found:
                tour_avail:
                longitude:
                latitude:
              }),

            knex('towns').insert(
                {
                  id: 4,
                  name:
                  yr_est:
                  yr_abnd:
                  description_then:
                  description_now:
                  cemetery:
                  mineral_found:
                  tour_avail:
                  longitude:
                  latitude:
                }),

            knex('towns').insert(
                  {
                    id: 5,
                    name:
                    yr_est:
                    yr_abnd:
                    description_then:
                    description_now:
                    cemetery:
                    mineral_found:
                    tour_avail:
                    longitude:
                    latitude:
                  }),

            knex('towns').insert(
                    {
                      id: 6,
                      name:
                      yr_est:
                      yr_abnd:
                      description_then:
                      description_now:
                      cemetery:
                      mineral_found:
                      tour_avail:
                      longitude:
                      latitude:
                    }),

            knex('towns').insert(
                      {
                        id: 7,
                        name:
                        yr_est:
                        yr_abnd:
                        description_then:
                        description_now:
                        cemetery:
                        mineral_found:
                        tour_avail:
                        longitude:
                        latitude:
                      }),

          knex('towns').insert(
                        {
                          id: 8,
                          name:
                          yr_est:
                          yr_abnd:
                          description_then:
                          description_now:
                          cemetery:
                          mineral_found:
                          tour_avail:
                          longitude:
                          latitude:
                        }),

          knex('towns').insert(
                          {
                            id: 9,
                            name:
                            yr_est:
                            yr_abnd:
                            description_then:
                            description_now:
                            cemetery:
                            mineral_found:
                            tour_avail:
                            longitude:
                            latitude:
                          }),

          knex('towns').insert(
                            {
                              id: 10
                              name:
                              yr_est:
                              yr_abnd:
                              description_then:
                              description_now:
                              cemetery:
                              mineral_found:
                              tour_avail:
                              longitude:
                              latitude:
                            }),
      ]);
    })
    .then(() => {
  return knex.raw(
    "SELECT setval('towns_id_seq', (SELECT MAX(id) FROM towns));"
  );
});
};
