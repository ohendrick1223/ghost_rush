'use strict';

//center and create map
function init() {

  var tarryall = {
    lat: 39.119080,
    lng: -105.473900
  };

  var map = new google.maps.Map( document.getElementById( 'map' ), {
    zoom: 6,
    center: tarryall
  } );

// console.log( 'loaded map init!');

//map markers
$(document).ready(function() {
// console.log("I'm ready!");

//town constructor
function Town (town) {
 const obj = town;
 this.id = obj[ "id" ];
 this.townPhoto = obj[ "photo_url" ];
 this.townName = obj[ "name" ];
 this.latlon = (parseFloat( obj[ "latitude" ] ) + ", " + parseFloat( obj[ "longitude" ] )).toString();
 this.lat = parseFloat (obj ["latitude"]);
 this.lng = parseFloat (obj ["longitude"]);
 this.townCemetery = obj [ "cemetery" ];
 this.townEst = obj ["yr_est"];
 this.townAbandon = obj ["yr_abnd"];
 this.townMaterials = obj ["mineral_found"];
 this.townTour = obj ["tour_avail"];
 this.townDescThen = obj ["description_then"];
 this.townDescNow = obj ["description_now"];
 // console.log(town);
}

//get town by id
  const urlParams = new URLSearchParams(window.location.search);

  urlParams.get('id');

  const townID = urlParams.get('id');

  const townAPIroute = '/towns/' + townID;
  // console.log("routes ready!");

  $.getJSON(townAPIroute)
    .done((town) => {

      // console.log(town[0]);

      var currentTown = new Town(town[0]);
      currentTown.populateTown();
    })

    .fail(function(err) {
      // console.log(err);
    });

    //populate town page with marker
     Town.prototype.populateTown  = function populateTown () {
       console.log(this.lat);
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

    //populates marker
       var marker = new google.maps.Marker({
        position: {lat: this.lat, lng: this.lng},
        map: map
       });
      //  console.log(marker);
     };

     //toasts for buttons
     Materialize.toast() // 4000 is the duration of the toast
   })
  }
