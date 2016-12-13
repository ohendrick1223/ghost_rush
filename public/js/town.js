'use strict';

// initialize map object constructor and database call
function init() {

  var tarryall = {
    lat: 39.119080,
    lng: -105.473900
  };

  var map = new google.maps.Map( document.getElementById( 'map' ), {
    zoom: 7,
    center: tarryall
  } );

  $('document').ready(function() {

console.log("I'm ready!");

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
// });

  function TownLocation(townObj) {
    const obj = townObj;
    this.id = obj["id"];
    this.name = obj["name"];
    // this.photoUrl = obj["photo_url"];
    // this.shortDescription = obj["short_desc"];
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

  //render markers
  function renderMarker(obj) {
    var newTown = new TownLocation(obj);
    // var content = newTown.contentString();
    var position = newTown.position();
    // var name = newTown.name;
    var marker = new google.maps.Marker({
        position: position,
        map: map,
        title: name
    });
    // var infowindow = new google.maps.InfoWindow({
    //     content: content
    // });
    // marker.addListener('click', function() {
    //     infowindow.open(map, marker);
    // });
    }
  }
}
