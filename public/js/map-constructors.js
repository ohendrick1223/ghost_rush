'use strict';

// exports {

function TownLocation( townObj ) {
  const obj = townObj;
  this.id = obj[ "id" ];
  this.name = obj[ "name" ];
  this.photoUrl = obj[ "photo_url" ];
  this.shortDescription = obj[ "short_description" ];
  this.lat = parseFloat( obj[ "latitude" ] );
  this.lng = parseFloat( obj[ "longitude" ] );
}

TownLocation.prototype.contentString = function() {

};
TownLocation.prototype.position = function() {
  var newLat = {
    lat: this.lat
  };
  var newLng = {
    lng: this.lng
  };
  return Object.assign( {}, newLat, newLng );
};


// var town = {
//   "id": 1,
//   "name": "Central City",
//   "photo_url": "http://www.legendsofamerica.com/photos-centralcity/CentralCityPostcard.jpg",
//   "yr_est": 1859,
//   "yr_abnd": "Still Alive",
//   "short_description": "Founded in 1859, it soon acquired the reputation of being in the middle of 'the richest square mile on earth.' By the end of its second year, most of the placer gold was gone which forced hard rock mining into being. Over speculation of some mining stocks created a real depression for a while, but the area survived and had good years during the '70s and '80s.",
//   "description_then": "Founded in 1859, it soon acquired the reputation of being in the middle of 'the richest square mile on earth.' By the end of its second year, most of the placer gold was gone which forced hard rock mining into being. Over speculation of some mining stocks created a real depression for a while, but the area survived and had good years during the '70s and '80s. Like most other mining towns of the era, Central City had its share of fires that ultimately resulted in brick being the material of choice with which to rebuild the town.",
//   "description_now": "Founded in 1859, it soon acquired the reputation of being in the middle of 'the richest square mile on earth.' By the end of its second year, most of the placer gold was gone which forced hard rock mining into being. Over speculation of some mining stocks created a real depression for a while, but the area survived and had good years during the '70s and '80s. Like most other mining towns of the era, Central City had its share of fires that ultimately resulted in brick being the material of choice with which to rebuild the town.",
//   "cemetery": "Yes",
//   "mineral_found": "Gold",
//   "tour_avail": true,
//   "longitude": "-105.51",
//   "latitude": "39.80"
// };
// var newTown = new TownLocation( town );
// var position = newTown.position()
// console.log( newTown );
// console.log( position );



//
// }
