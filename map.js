'use strict';

// Add Location, Title, and Image
function initMap() {

  var tellerCity = {lat: 39.681111, lng: -105.076354};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: tellerCity
  });

  var contentString = '<a href = "www.google.com><div id="content">'+
      '<div id="siteNotice">'+
      '</div>'
      +
      '<h1 id="firstHeading" class="firstHeading">Teller City</h1>'
      +
      '<div id="bodyContent"><img src = "http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg"</a>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: tellerCity,
    map: map,
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}
