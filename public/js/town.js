'use strict';

// // initialize map object constructor and database call
//center and create map
function init() {

  var tarryall = {
    lat: 39.119080,
    lng: -105.473900
  };

  var map = new google.maps.Map( document.getElementById( 'map' ), {
    zoom: 7,
    center: tarryall
  } );

console.log( 'loaded map init!');

//map markers
$(document).ready(function() {
console.log("I'm ready!");

function TownLocation(townObj) {
  const obj = townObj;
  this.id = obj["id"];
  this.name = obj["name"];
  this.lat = parseFloat(obj["latitude"]);
  this.lng = parseFloat(obj["longitude"]);
}

TownLocation.prototype.position = function() {
  var newLat = {
      lat: this.lat
  };
  var newLng = {
      lng: this.lng
  };
  return Object.assign({}, newLat, newLng);
};

//TODO: Map is showing but not specific location with marker
$.getJSON('/towns')
    .done((town) => {
        var location = town;
        // locations.map(renderMarkerWithWindow);
    });

//render markers and info windows
function renderMarker(obj) {
    var newTown = new TownLocation(obj);
    // var content = newTown.contentString();
    var position = newTown.position();
    // var name = newTown.name;
    var marker = new google.maps.Marker({
        position: position,
        map: map,
        // title: name
    });
}

//get town by id
  const urlParams = new URLSearchParams(window.location.search);

  urlParams.get('id');

  const townID = urlParams.get('id');

  const townAPIroute = '/towns/' + townID;
  console.log("routes ready!");

    $.getJSON(townAPIroute)
    .done((town) => {
      // if(json.status !==200) {
      console.log(town[0]);
      //
      // }
      var currentTown = new Town(town[0]);
      currentTown.populateTown();
    })
    .fail(function(err) {
      console.log(err);
    });

    function Town (town) {
     const obj = town;
     this.id = obj[ "id" ];
     this.townPhoto = obj[ "photo_url" ];
     this.townName = obj[ "name" ];
     this.latlon = (parseFloat( obj[ "latitude" ] ) + ", " + parseFloat( obj[ "longitude" ] )).toString();
     this.townCemetery = obj [ "cemetery" ];
     this.townEst = obj ["yr_est"];
     this.townAbandon = obj ["yr_abnd"];
     this.townMaterials = obj ["mineral_found"];
     this.townTour = obj ["tour_avail"];
     this.townDescThen = obj ["description_then"];
     this.townDescNow = obj ["description_now"];
   }

     Town.prototype.populateTown  = function populateTown () {
       //function to render town
       $('#image').attr({ src: this.townPhoto, alt: this.townName });
       $('#townName').text(this.townName);
       $('#townLocation').text(this.latlon);
       $('#townCemetery').text(this.townCemetery);
       $('#townEst').text(this.townEst);
       $('#townAbandon').text(this.townAbandon);
       $('#townMaterials').text(this.townMaterials);
       $('#townTour').text(this.townTour);
       $('#townDescThen').text(this.townDescThen);
       $('#townDescNow').text(this.townDescNow);
     };
   });
}
