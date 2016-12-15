'use strict';

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('towns').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('towns').insert({
                    id: 1,
                    name: 'Central City',
                    photo_url: 'http://www.legendsofamerica.com/photos-centralcity/CentralCityPostcard.jpg',
                    yr_est: 1859,
                    yr_abnd: 'Still Alive',
                    short_desc: 'Central City, established in 1859, was known as being in the middle of "the richest square mile on earth" due to large amounts of gold. The town is still inhabited, and looks very similar to how it looked 100 years ago.',
                    description_then: "Founded in 1859, it soon acquired the reputation of being in the middle of 'the richest square mile on earth.' By the end of its second year, most of the placer gold was gone which forced hard rock mining into being. Over speculation of some mining stocks created a real depression for a while, but the area survived and had good years during the '70s and '80s. Like most other mining towns of the era, Central City had its share of fires that ultimately resulted in brick being the material of choice with which to rebuild the town.",
                    description_now: "Founded in 1859, it soon acquired the reputation of being in the middle of 'the richest square mile on earth.' By the end of its second year, most of the placer gold was gone which forced hard rock mining into being. Over speculation of some mining stocks created a real depression for a while, but the area survived and had good years during the '70s and '80s. Like most other mining towns of the era, Central City had its share of fires that ultimately resulted in brick being the material of choice with which to rebuild the town.",
                    cemetery: 'Yes',
                    mineral_found: 'Gold',
                    tour_avail: 'Yes',
                    longitude: -105.514164,
                    latitude: 39.801932
                }),
                knex('towns').insert({
                    id: 2,
                    name: 'Teller City',
                    photo_url: 'http://www.passportintime.com/images/co01_mb-r_tellercity_oldhot.jpg',
                    yr_est: 1879,
                    yr_abnd: 1884,
                    short_desc: 'Teller City, established in 1879, was founded due to large amounts of silver in the area. Now, a completely abandoned town, Teller City has numerous remains of log cabins.',
                    description_then: 'By 1882, population exceeded 1800. 40 room hotel, 27 saloons, hundreds of log cabins',
                    description_now: 'Numerous remains of log cabins; property off limits due to beetle kill prevention efforts',
                    cemetery: 'No',
                    mineral_found: 'Silver',
                    tour_avail: 'Unknown',
                    longitude: -105.076354,
                    latitude: 39.681111
                }),
                knex('towns').insert({
                    id: 3,
                    name: 'Silver Plume',
                    photo_url: 'http://pics4.city-data.com/cpicv/vfiles10228.jpg',
                    yr_est: 1870,
                    yr_abnd: 'Still Alive',
                    short_desc: 'Silver Plume, established in 1870, was founded for silver mining. It\'s known for a minor who was well loved by the community, but he tragically commited suicide when he was unable to find happiness after his fiance\'s death. The town has several buildings still standing.',
                    description_then: "Had own newspaper, The Coloradoan. Known for miner who's fiance died the eve of their wedding. He retired to his cabin nightly to drink and play the violin. The townspeople would listen to him until one day, the final violin note was followed by a gunshot. The miner was found with a bullet through his heart and burial instructions he wrote.",
                    description_now: 'Numerous buildings still stand including a church, school, playhouse, jail, grocery store',
                    cemetery: 'Yes',
                    mineral_found: 'Silver',
                    tour_avail: 'Unknown',
                    longitude: -105.725839,
                    latitude: 39.696098
                }),
                knex('towns').insert({
                    id: 4,
                    name: 'Independence',
                    photo_url: 'http://cdn.allaspen.com/images/content/3742_5313_Independence_Colorado_Ghost_Town_md.jpg',
                    yr_est: 1879,
                    yr_abnd: 1899,
                    short_desc: 'Independence, established in 1879, was founded when gold was discovered on July 4, 1879. The town is no longer populated but is available for tours.',
                    description_then: 'Legend has it that prospectors discovered the Independence Gold Lode on July 4, 1879. A tent city sprang up that summer, and by 1880 there were 300 people living in the camp.  By 1882 the Town of Independence had over 40 businesses with three post offices and an estimated population of 1,500. A miner could get room and board for $2 at the New England House, a boarding house on the east end of Main Street.',
                    description_now: 'During the winter of 1899 the worst storm in Colorado’s history cut off the supply routes to Independence. The miners, who were running out of food, proceeded to dismantle their homes to make 75 pairs of skis and to escape en masse to Aspen. They made light of their adventure by making it a race of the Hunter’s Pass Ski Club—entry fee: one ham sandwich.',
                    cemetery: 'No',
                    mineral_found: 'Gold',
                    tour_avail: 'Yes',
                    longitude: -81.637903,
                    latitude: 41.368665
                }),
                knex('towns').insert({
                    id: 5,
                    name: 'Crystal',
                    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Crystal_Mill%2C_Colorado.jpg/800px-Crystal_Mill%2C_Colorado.jpg',
                    yr_est: 1881,
                    yr_abnd: 1915,
                    short_desc: 'Crystal, established in 1881, was mined for silver as early as the 1860s. The town has a few summer residents and a few buildings still standing. Cabins can be rented during the summer, and Jeep tours are available.',
                    description_then: "Crystal was incorporated on July 8, 1881, but mined as early as the 1860s. At its peak, Crystal had 400+ residents in Crystal and the surrounding mining claims, two newspapers, a pool hall, a men's club, a barber shop and two hotels.",
                    description_now: "Today, most of the town of Crystal is owned by the relatives of Emmet Gould. Mr. Gould bought lots, cabins, and several claims in and around Crystal during the 1940s. In 1948, the family of Welcome Joe Neal began vacationing in Crystal. Joe Neal's family owns three cabins. Rob Anderson owns the house that his grandfather built in the late 1800s. Richard Beamon also owns a cabin. These owners live in Crystal during the summer months only. There is a small general store, public outhouse, and some of the cabins are available for summer rentals.",
                    cemetery: 'No',
                    mineral_found: 'Silver, lead, copper, iron, and zinc. Very little gold was found in Crystal',
                    tour_avail: 'Yes',
                    longitude: -107.102661,
                    latitude: 39.059772
                }),
                knex('towns').insert({
                    id: 6,
                    name: "Ashcroft",
                    photo_url: 'http://www.natezeman.com/images/xl/0369_The_Hotel_View_Nate_Zemanjpg.jpg',
                    yr_est: 1880,
                    yr_abnd: 1939,
                    short_desc: 'Ashcroft, established in 1880, was mined for silver. Many of the buildings still standing have false fronts since a television series was filmed there during the 1950s.',
                    description_then: 'Population of 2,000 with 2 newspapers, a school, sawmill, small smelter, and 20 saloons.',
                    description_now: "A popular 1950s TV series called Sgt.Preston of the Yukon was filmed in Ashcroft so many of the current buildings today were fitted with false fronts. Ashcroft became a National Register Historic Site and holds the first USFS permit granted to a historical society to preserve and interpret a ghost town.",
                    cemetery: 'No',
                    mineral_found: 'Silver',
                    tour_avail: 'Unknown',
                    longitude: -106.79976,
                    latitude: 39.053601
                }),
                knex('towns').insert({
                    id: 7,
                    name: "St Elmo",
                    photo_url: 'https://static1.squarespace.com/static/5537f7d8e4b0dacdf31a3305/t/56c14133cf80a1dd4319c578/1455505765867/Cash-Williams+Building+St+Elmo+Colorado',
                    yr_est: 1880,
                    yr_abnd: 'Still Alive',
                    short_desc: 'St Elmo, established in 1880, was initially mined for gold then silver and finally hard rock. There was a St Elmo\'s fire in 2002 that burned down the town hall and a few other buildings. However, several buildings still stand, and tourism brings many people there each year.',
                    description_then: "St. Elmo was originally named Forest City but was later changed because of the multitude of towns with the same name. The name St. Elmo was chosen by Griffith Evans, one of the founding fathers, who was reading a novel with the same title. The town was at its peak in the 1890s, when it included a telegraph office, general store, town hall, 5 hotels, saloons, dancing halls, a newspaper office, and a school house. The Denver, South Park and Pacific Railroad line ran through St. Elmo. There were 150 patented mine claims within the area. The Mary Murphy Mine was the largest and most successful mine in the area. The Mary Murphy Mine recovered over $60,000,000 worth of gold while it was in operation. While the other mines eventually shut down, the Mary Murphy Mine continued to operate until the railroad was abandoned in 1922. Once the mining industry shut down, St. Elmo drastically declined in population. Miners searched elsewhere for gold and silver and the business district in St. Elmo closed down as well. Few people continued to live in the town. Postal service was discontinued in 1952 after the death of St. Elmo's postmaster.",
                    description_now: "Even though St. Elmo is considered a ghost town it is still inhabited. Tourism brings many people to the St. Elmo area every year. The old mining roads are now used as Jeep and four-wheeler trails. There are also many good places to fish along Chalk Creek, which runs through St. Elmo. The general store is open during the summer, when tourists can rent four-wheelers or buy items. Many of the buildings are still intact. However, the town hall and a few other buildings burnt down in 2002. Buena Vista Heritage is rebuilding the town hall to its original state.",
                    cemetery: 'No',
                    mineral_found: 'Gold, Silver',
                    tour_avail: 'Unknown',
                    longitude: -106.346223,
                    latitude: 38.703365
                }),
                knex('towns').insert({
                    id: 8,
                    name: 'Animas Fork',
                    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/2006-07-19_Animas_Forks%2C_Colorado.jpg/1920px-2006-07-19_Animas_Forks%2C_Colorado.jpg',
                    yr_est: 1873,
                    yr_abnd: 1920,
                    short_desc: 'Animas Fork, established in 1873, was founded for silver mining. It is a tourist attraction to this day with several structures standing and reinforced.',
                    description_then: "The town's first log cabin was built in 1873 and by 1876 the community had become a bustling mining community. At that time the town contained 30 cabins, a hotel, a general store, a saloon, and a post office. By 1883 450 people lived in Animas Forks.  Every fall the residents of Animas Forks migrated en masse to the warmer town of Silverton. In 1884 a 23-day blizzard inundated the town with 25 feet (7.6 m) of snow, the residents had to dig tunnels to get from building to building. ",
                    description_now: "Present day Animas Fork continues as a tourist attraction. A Colorado State Historical Fund grant to San Juan County, in cooperation with the Bureau of Land Management, provided for stabilization of the remaining structures in 1997 and 1998.",
                    cemetery: "Yes",
                    mineral_found: "Silver",
                    tour_avail: 'Yes',
                    longitude: -107.570046,
                    latitude: 37.932293
                }),
                knex('towns').insert({
                    id: 9,
                    name: 'Gilman',
                    photo_url: 'http://strangeabandonedplaces.com/wp-content/uploads/2016/02/image-5.jpeg',
                    yr_est: 1886,
                    yr_abnd: 1984,
                    short_desc: 'Gilman, established in 1886, was founded for gold and silver mining. It was abandoned in 1984 by order of the EPA due to toxic pollutants in the water. Gilman is currently on private property and off limits to the public.',
                    description_then: "The town of Gilman and nearby mining operations were developed in the 1880s by John Clinton, a prospector, judge, and speculator from nearby Redclliff. In 1887, gold and silver were discovered in two vertical chimneys at the Ground Hog Mine, which continued to produce gold and silver ore until the 1920s.",
                    description_now: "Gilman was abandoned in 1984 by order of the Environmental Protection Agency because of toxic pollutants, including contamination of the ground water, as well as unprofitability of the mines. It is currently a ghost town on private property and is strictly off limits to the public.",
                    cemetery: 'Yes',
                    mineral_found: 'Silver, Lead',
                    tour_avail: 'Unknown',
                    longitude: -106.393918,
                    latitude: 39.532764
                }),
                knex('towns').insert({
                    id: 10,
                    name: "Caribou",
                    photo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/CaribouCO-2005.jpg/220px-CaribouCO-2005.jpg',
                    yr_est: 1869,
                    yr_abnd: 1944,
                    short_desc: 'Caribou, established in 1869, produced over $8 million in silver before closing. Most of the town was destroyed by fire in 1899, but a few buildings remain.',
                    description_then: 'Produced over $8 million in silver before closing leading to Colorado being called The Silver State. President Grant once vsited and his pathway was lined with 70 silver bricks.',
                    description_now: "Most of the town was destroyed it's 2nd fire in 1899. Sherman House hotel remains, a cabin, and gravestones remain.",
                    cemetery: 'Yes',
                    mineral_found: 'Silver',
                    tour_avail: 'Unknown',
                    longitude: -105.512776,
                    latitude: 39.989987
                }),
                knex('towns').insert({
                    id: 11,
                    name: "MatVille",
                    photo_url: 'http://i.imgur.com/M5kL71b.jpg',
                    yr_est: 1843,
                    yr_abnd: 'Still Alive',
                    short_desc: 'MatVille, established in 1865, produced much gold before musical theatre became the primary source of revenue. It is still a thriving community today.',
                    description_then: "Ancient as the gold the town was built.",
                    description_now: "Aging gracefully",
                    cemetery: 'No',
                    mineral_found: 'Gold',
                    tour_avail: 'Unknown',
                    longitude: -105.270546,
                    latitude: 40.014986
                }),
                knex('towns').insert({
                    id: 12,
                    name: "Teddi Town",
                    photo_url: 'https://secure.parksandresorts.wdpromedia.com/media/disneyparks/blog/wp-content/uploads/2011/09/day593242LARGE.jpg',
                    yr_est: 1820,
                    yr_abnd: 'Still Alive',
                    short_desc: 'Teddi Town, established in 1883, was a silver mining town for several years. The town was destroyed by a 50-foot toddler in 1901, but a few buildings are still partially standing.',
                    description_then: "Silver veins were plentiful for several years!",
                    description_now: "The town was destroyed by a 50-foot toddler in 1901, but a few buildings are still partially standing.",
                    cemetery: 'Yes',
                    mineral_found: 'Silver',
                    tour_avail: 'Yes',
                    longitude: -104.971924,
                    latitude: 39.868041
                })
            ]);
        })
        .then(() => {
            return knex.raw(
                "SELECT setval('towns_id_seq', (SELECT MAX(id) FROM towns));"
            );
        });
};
