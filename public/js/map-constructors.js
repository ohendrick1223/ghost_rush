'use strict';

function TownLocation( townObj ) {
  const obj = townObj;
  this.id = obj[ "id" ];
  this.name = obj[ "name" ];
  this.photoUrl = obj[ "photo_url" ];
  this.shortDescription = obj[ "short_desc" ];
  this.lat = parseFloat( obj[ "latitude" ] );
  this.lng = parseFloat( obj[ "longitude" ] );
}

TownLocation.prototype.contentString = function() {
  return ( '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<a href = "/town_profile.html?id=2' + this.id + '" <h1 id="firstHeading" class="firstHeading">' + this.name + '</h1></a>' +
    '<div id="bodyContent">' +
    '<p>' + this.shortDescription + '</p>' +
    '<img class="markerInfoPhoto" src = "' + this.photoUrl + '"</div>' + '</div>' + '</div>' );
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

module.exports = TownLocation;
