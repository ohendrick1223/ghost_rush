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

  // map markers

      $(document).ready(
        function() {
            console.log("I'm loaded");

            function TownLocation(townObj) {
                const obj = townObj;
                this.id = obj["id"];
                this.name = obj["name"];
                this.photoUrl = obj["photo_url"];
                this.shortDescription = obj["short_desc"];
                this.lat = parseFloat(obj["latitude"]);
                this.lng = parseFloat(obj["longitude"]);
            }

            TownLocation.prototype.contentString = function() {
                return ('<div id="content">' +
                    '<div id="siteNotice">' +
                    '</div>' +
                    '<a href = "/town_profile.html?id=' + this.id + '" <h1 id="firstHeading" class="firstHeading">' + this.name + '</h1></a>' +
                    '<div id="bodyContent">' +
                    '<p>' + this.shortDescription + '</p>' +
                    '<img class="markerInfoPhoto" src = "' + this.photoUrl + '"</div>' + '</div>' + '</div>');
            };
            TownLocation.prototype.position = function() {
                var newLat = {
                    lat: this.lat
                };
                var newLng = {
                    lng: this.lng
                };
                return Object.assign({}, newLat, newLng);
            };

            $.getJSON('/towns')
                .done((towns) => {
                    var locations = towns;
                    locations.map(renderMarkerWithWindow);
                });
            //render markers and info windows
            function renderMarkerWithWindow(obj) {
                var newTown = new TownLocation(obj);
                var content = newTown.contentString();
                var position = newTown.position();
                // var name = newTown.name;
                var marker = new google.maps.Marker({
                    position: position,
                    map: map,
                    title: name
                });
                var infowindow = new google.maps.InfoWindow({
                    content: content
                });
                marker.addListener('click', function() {
                    infowindow.open(map, marker);
                });
            }
        });
}
