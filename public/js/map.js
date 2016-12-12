'use strict';
var TownLocation = require( 'map-constructors.js' );
console.log( "I'm loaded" );
/*function init() {
    var myLatlng = new google.maps.LatLng(54.559322,-4.174804); // Add the coordinates
    var mapOptions = {
        center: myLatlng,
        zoom: 6, // The initial zoom
        minZoom: 6, // Minimum zoom
        maxZoom: 15 // Maximum zoom
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions); // Render the map within the empty div
}*/

// Add Location, Title, and Image
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






  // var tellerCity = {
  //   lat: 40.433316,
  //   lng: -106.003351
  // };
  //
  // var contentString = '<div id="content">' +
  //   '<div id="siteNotice">' +
  //   '</div>' +
  //   '<a href = "/town_profile.html?id=2" <h1 id="firstHeading" class="firstHeading">Teller City</h1></a>' +
  //   '<div id="bodyContent">' +
  //   '<p><b>Teller City</b>, established in 1879, was founded due to large amounts of silver in the area. ' +
  //   'Now, a completely abandoned town, Teller City has numerous remains of log cabins.</p>' +
  //   '<img class="markerInfoPhoto" src = "http://www.passportintime.com/images/co01_mb-r_tellercity_oldhot.jpg"</div>' + '</div>' + '</div>';
  //
  // // link to town profile <a href = "https://ghostrush.herokuapp.com/town_profile.html?id=2"</a>
  //
  // var infowindow = new google.maps.InfoWindow( {
  //   content: contentString
  // } );
  //
  // var marker = new google.maps.Marker( {
  //   position: tellerCity,
  //   map: map,
  //   title: 'Teller City'
  // } );
  //
  // marker.addListener( 'click', function() {
  //   infowindow.open( map, marker );
  // } );
  //
  // var centralCity = {
  //   lat: 39.801932,
  //   lng: -105.514164
  // };
  //
  // var contentString = '<div id="content">' +
  //   '<div id="siteNotice">' +
  //   '</div>' +
  //   '<a href = "/town_profile.html?id=1" <h1 id="firstHeading" class="firstHeading">Central City</h1></a>' +
  //   '<div id="bodyContent">' +
  //   '<p><b>Central City</b>, established in 1859, was known as being in the middle of "the richest square mile on earth" due to large amounts of gold. ' +
  //   'The town is still inhabited, and its appearance is very similar to how it looked 100 years ago.</p>' +
  //   '<img class="markerInfoPhoto" src = "http://www.legendsofamerica.com/photos-centralcity/CentralCityPostcard.jpg"</div>' + '</div>' + '</div>';
  //
  // var infowindow = new google.maps.InfoWindow( {
  //   content: contentString
  // } );
  //
  // var marker = new google.maps.Marker( {
  //   position: centralCity,
  //   map: map,
  //   title: 'Central City'
  // } );
  //
  // marker.addListener( 'click', function() {
  //   infowindow.open( map, marker );
  // } );
  //
  // var silverPlume = {
  //   lat: 39.696098,
  //   lng: -105.725839
  // };
  //
  // var contentString = '<div id="content">' +
  //   '<div id="siteNotice">' +
  //   '</div>' +
  //   '<a href = "/town_profile.html?id=3" <h1 id="firstHeading" class="firstHeading">Silver Plume</h1></a>' +
  //   '<div id="bodyContent">' +
  //   '<p><b>Silver Plume</b>, established in 1870, was founded for silver mining. It\'s known for a minor who was well loved by the community, but he tragically commited suicide being unable to find happiness after his fiance\'s death. ' +
  //   'The town has several buildings still standing.</p>' +
  //   '<img class="markerInfoPhoto" src = "http://www.uncovercolorado.com/wp-content/uploads/2011/11/2011-11-16_Silver-Plume-Main-Street-Sign-1000x500-650x325.jpg"</div>' + '</div>' + '</div>';
  //
  // var infowindow = new google.maps.InfoWindow( {
  //   content: contentString
  // } );
  //
  // var marker = new google.maps.Marker( {
  //   position: silverPlume,
  //   map: map,
  //   title: 'Silver Plume'
  // } );
  //
  // marker.addListener( 'click', function() {
  //   infowindow.open( map, marker );
  // } );
  //
  // var independence = {
  //   lat: 39.059772,
  //   lng: -106.563919
  // };
  //
  // var contentString = '<div id="content">' +
  //   '<div id="siteNotice">' +
  //   '</div>' +
  //   '<a href = "/town_profile.html?id=4" <h1 id="firstHeading" class="firstHeading">Independence</h1></a>' +
  //   '<div id="bodyContent">' +
  //   '<p><b>Independence</b>, established in 1879, was founded when gold was discovered on July 4, 1879. ' +
  //   'The town is no longer populated but is available for tours.</p>' +
  //   '<img class="markerInfoPhoto" src = "http://www.motorcyclecolorado.com/images/IndependenceGhostTown2.jpg"</div>' + '</div>' + '</div>';
  //
  // var infowindow = new google.maps.InfoWindow( {
  //   content: contentString
  // } );
  //
  // var marker = new google.maps.Marker( {
  //   position: independence,
  //   map: map,
  //   title: 'Independence'
  // } );
  //
  // marker.addListener( 'click', function() {
  //   infowindow.open( map, marker );
  // } );
  //
  // var crystal = {
  //   lat: 39.059772,
  //   lng: -107.102661
  // };
  //
  // var contentString = '<div id="content">' +
  //   '<div id="siteNotice">' +
  //   '</div>' +
  //   '<a href = "/town_profile.html?id=5" <h1 id="firstHeading" class="firstHeading">Crystal</h1></a>' +
  //   '<div id="bodyContent">' +
  //   '<p><b>Crystal</b>, established in 1881, was mined for silver as early as the 1860s. ' +
  //   'The town has a few summer residents and a few buildings still standing. Cabins can be rented during the summer, and Jeep tours are available.</p>' +
  //   '<img class="markerInfoPhoto" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Crystal_Mill%2C_Colorado.jpg/800px-Crystal_Mill%2C_Colorado.jpg"</div>' + '</div>' + '</div>';
  //
  // var infowindow = new google.maps.InfoWindow( {
  //   content: contentString
  // } );
  //
  // var marker = new google.maps.Marker( {
  //   position: crystal,
  //   map: map,
  //   title: 'Crystal'
  // } );
  //
  // marker.addListener( 'click', function() {
  //   infowindow.open( map, marker );
  // } );
  //
  // var ashcroft = {
  //   lat: 39.053601,
  //   lng: -106.79976
  // };
  //
  // var contentString = '<div id="content">' +
  //   '<div id="siteNotice">' +
  //   '</div>' +
  //   '<a href = "/town_profile.html?id=6" <h1 id="firstHeading" class="firstHeading">Ashcroft</h1></a>' +
  //   '<div id="bodyContent">' +
  //   '<p><b>Ashcroft</b>, established in 1880, was mined for silver. ' +
  //   'Many of the buildings still standing have false fronts since a television series was filmed there during the 1950s.</p>' +
  //   '<img class="markerInfoPhoto" src = "http://aspenhistory.org/wp-content/uploads/2015/07/tours-museum_images_ashcroft41.jpg"</div>' + '</div>' + '</div>';
  //
  // var infowindow = new google.maps.InfoWindow( {
  //   content: contentString
  // } );
  //
  // var marker = new google.maps.Marker( {
  //   position: ashcroft,
  //   map: map,
  //   title: 'Ashcroft'
  // } );
  //
  // marker.addListener( 'click', function() {
  //   infowindow.open( map, marker );
  // } );
  //
  // var stElmo = {
  //   lat: 38.703365,
  //   lng: -106.346223
  // };
  //
  // var contentString = '<div id="content">' +
  //   '<div id="siteNotice">' +
  //   '</div>' +
  //   '<a href = "/town_profile.html?id=7" <h1 id="firstHeading" class="firstHeading">St Elmo</h1></a>' +
  //   '<div id="bodyContent">' +
  //   '<p><b>St Elmo</b>, established in 1880, was initially mined for gold then silver and finally hard rock. ' +
  //   'There was a St Elmo\'s fire in 2002 that burned down the town hall and a few other buildings. However, several buildings still stand and tourism brings many people there each year.</p>' +
  //   '<img class="markerInfoPhoto" src = "https://static1.squarespace.com/static/5537f7d8e4b0dacdf31a3305/t/56c14133cf80a1dd4319c578/1455505765867/Cash-Williams+Building+St+Elmo+Colorado"</div>' + '</div>' + '</div>';
  //
  // var infowindow = new google.maps.InfoWindow( {
  //   content: contentString
  // } );
  //
  // var marker = new google.maps.Marker( {
  //   position: stElmo,
  //   map: map,
  //   title: 'St Elmo'
  // } );
  //
  // marker.addListener( 'click', function() {
  //   infowindow.open( map, marker );
  // } );
  //
  // var animasFork = {
  //   lat: 37.932293,
  //   lng: -107.570046
  // };
  //
  // var contentString = '<div id="content">' +
  //   '<div id="siteNotice">' +
  //   '</div>' +
  //   '<a href = "/town_profile.html?id=8" <h1 id="firstHeading" class="firstHeading">Animas Fork</h1></a>' +
  //   '<div id="bodyContent">' +
  //   '<p><b>Animas Fork</b>, established in 1873, was founded for silver mining. ' +
  //   'It is a tourist attraction to this day with several structures still standing and reinforced.</p>' +
  //   '<img class="markerInfoPhoto" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/2006-07-19_Animas_Forks%2C_Colorado.jpg/1920px-2006-07-19_Animas_Forks%2C_Colorado.jpg"</div>' + '</div>' + '</div>';
  //
  // var infowindow = new google.maps.InfoWindow( {
  //   content: contentString
  // } );
  //
  // var marker = new google.maps.Marker( {
  //   position: animasFork,
  //   map: map,
  //   title: 'Animas Fork'
  // } );
  //
  // marker.addListener( 'click', function() {
  //   infowindow.open( map, marker );
  // } );
  //
  // var gilman = {
  //   lat: 39.532764,
  //   lng: -106.393918
  // };
  //
  // var contentString = '<div id="content">' +
  //   '<div id="siteNotice">' +
  //   '</div>' +
  //   '<a href = "/town_profile.html?id=9" <h1 id="firstHeading" class="firstHeading">Gilman</h1></a>' +
  //   '<div id="bodyContent">' +
  //   '<p><b>Gilman</b>, established in 1886, was founded for gold and silver mining. ' +
  //   'It was abandoned in 1984 by the EPA due to toxic pollutants in the water. Gilman is currently on private property and off limits to the public.</p>' +
  //   '<img class="markerInfoPhoto" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/DSCN3044_gilmancliff_e_600.jpg/550px-DSCN3044_gilmancliff_e_600.jpg"</div>' + '</div>' + '</div>';
  //
  // var infowindow = new google.maps.InfoWindow( {
  //   content: contentString
  // } );
  //
  // var marker = new google.maps.Marker( {
  //   position: gilman,
  //   map: map,
  //   title: 'Gilman'
  // } );
  //
  // marker.addListener( 'click', function() {
  //   infowindow.open( map, marker );
  // } );
  //
  // var caribou = {
  //   lat: 39.989987,
  //   lng: -105.512776
  // };
  //
  // var contentString = '<div id="content">' +
  //   '<div id="siteNotice">' +
  //   '</div>' +
  //   '<a href = "/town_profile.html?id=10" <h1 id="firstHeading" class="firstHeading">Caribou</h1></a>' +
  //   '<div id="bodyContent">' +
  //   '<p><b>Caribou</b>, established in 1886, was founded for gold and silver mining. ' +
  //   'It was abandoned in 1984 by the EPA due to toxic pollutants in the water. Gilman is currently on private property and off limits to the public.</p>' +
  //   '<img class="markerInfoPhoto" src = "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/CaribouCO-2005.jpg/220px-CaribouCO-2005.jpg"</div>' + '</div>' + '</div>';
  //
  // var infowindow = new google.maps.InfoWindow( {
  //   content: contentString
  // } );
  //
  // var marker = new google.maps.Marker( {
  //   position: caribou,
  //   map: map,
  //   title: 'Caribou'
  // } );
  //
  // marker.addListener( 'click', function() {
  //   infowindow.open( map, marker );
  // } );
  //
  //   var tarryall = {
  //       lat: 39.119080,
  //       lng: -105.473900
  //   };
  //
  //   var map = new google.maps.Map(document.getElementById('map'), {
  //       zoom: 7,
  //       center: tarryall
  //   });
  //
  //   // map markers
  //   var centralCity = {
  //       lat: 39.801932,
  //       lng: -105.514164
  //   };
  //
  //   var contentString = '<div id="content">' +
  //       '<div id="siteNotice">' +
  //       '</div>' +
  //       '<a href = "/town_profile.html?id=1" <h1 id="firstHeading" class="firstHeading">Central City</h1></a>' +
  //       '<div id="bodyContent">' +
  //       '<p><b>Central City</b>, established in 1859, was known as being in the middle of "the richest square mile on earth" due to large amounts of gold. ' +
  //       'The town is still inhabited, and its appearance is very similar to how it looked 100 years ago.</p>' +
  //       '<img class="markerInfoPhoto" src = "http://www.legendsofamerica.com/photos-centralcity/CentralCityPostcard.jpg"</div>' + '</div>' + '</div>';
  //
  //   var infowindow = new google.maps.InfoWindow({
  //       content: contentString
  //   });
  //
  //   var marker = new google.maps.Marker({
  //       position: centralCity,
  //       map: map,
  //       title: 'Central City'
  //   });
  //
  //   marker.addListener('click', function() {
  //       infowindow.open(map, marker);
  //   });
  //
  //   var tellerCity = {
  //       lat: 40.433316,
  //       lng: -106.003351
  //   };
  //
  //   var contentString = '<div id="content">' +
  //       '<div id="siteNotice">' +
  //       '</div>' +
  //       '<a href = "/town_profile.html?id=2" <h1 id="firstHeading" class="firstHeading">Teller City</h1></a>' +
  //       '<div id="bodyContent">' +
  //       '<p><b>Teller City</b>, established in 1879, was founded due to large amounts of silver in the area. ' +
  //       'Now, a completely abandoned town, Teller City has numerous remains of log cabins.</p>' +
  //       '<img class="markerInfoPhoto" src = "http://www.passportintime.com/images/co01_mb-r_tellercity_oldhot.jpg"</div>' + '</div>' + '</div>';
  //
  //   // link to town profile <a href = "https://ghostrush.herokuapp.com/town_profile.html?id=2"</a>
  //
  //   var infowindow = new google.maps.InfoWindow({
  //       content: contentString
  //   });
  //
  //   var marker = new google.maps.Marker({
  //       position: tellerCity,
  //       map: map,
  //       title: 'Teller City'
  //   });
  //
  //   marker.addListener('click', function() {
  //       infowindow.open(map, marker);
  //   });
  //
  //   var silverPlume = {
  //       lat: 39.696098,
  //       lng: -105.725839
  //   };
  //
  //   var contentString = '<div id="content">' +
  //       '<div id="siteNotice">' +
  //       '</div>' +
  //       '<a href = "/town_profile.html?id=3" <h1 id="firstHeading" class="firstHeading">Silver Plume</h1></a>' +
  //       '<div id="bodyContent">' +
  //       '<p><b>Silver Plume</b>, established in 1870, was founded for silver mining. It\'s known for a minor who was well loved by the community, but he tragically commited suicide being unable to find happiness after his fiance\'s death. ' +
  //       'The town has several buildings still standing.</p>' +
  //       '<img class="markerInfoPhoto" src = "http://www.uncovercolorado.com/wp-content/uploads/2011/11/2011-11-16_Silver-Plume-Main-Street-Sign-1000x500-650x325.jpg"</div>' + '</div>' + '</div>';
  //
  //   var infowindow = new google.maps.InfoWindow({
  //       content: contentString
  //   });
  //
  //   var marker = new google.maps.Marker({
  //       position: silverPlume,
  //       map: map,
  //       title: 'Silver Plume'
  //   });
  //
  //   marker.addListener('click', function() {
  //       infowindow.open(map, marker);
  //   });
  //
  //   var independence = {
  //       lat: 39.059772,
  //       lng: -106.563919
  //   };
  //
  //   var contentString = '<div id="content">' +
  //       '<div id="siteNotice">' +
  //       '</div>' +
  //       '<a href = "/town_profile.html?id=4" <h1 id="firstHeading" class="firstHeading">Independence</h1></a>' +
  //       '<div id="bodyContent">' +
  //       '<p><b>Independence</b>, established in 1879, was founded when gold was discovered on July 4, 1879. ' +
  //       'The town is no longer populated but is available for tours.</p>' +
  //       '<img class="markerInfoPhoto" src = "http://www.motorcyclecolorado.com/images/IndependenceGhostTown2.jpg"</div>' + '</div>' + '</div>';
  //
  //   var infowindow = new google.maps.InfoWindow({
  //       content: contentString
  //   });
  //
  //   var marker = new google.maps.Marker({
  //       position: independence,
  //       map: map,
  //       title: 'Independence'
  //   });
  //
  //   marker.addListener('click', function() {
  //       infowindow.open(map, marker);
  //   });
  //
  //   var crystal = {
  //       lat: 39.059772,
  //       lng: -107.102661
  //   };
  //
  //   var contentString = '<div id="content">' +
  //       '<div id="siteNotice">' +
  //       '</div>' +
  //       '<a href = "/town_profile.html?id=5" <h1 id="firstHeading" class="firstHeading">Crystal</h1></a>' +
  //       '<div id="bodyContent">' +
  //       '<p><b>Crystal</b>, established in 1881, was mined for silver as early as the 1860s. ' +
  //       'The town has a few summer residents and a few buildings still standing. Cabins can be rented during the summer, and Jeep tours are available.</p>' +
  //       '<img class="markerInfoPhoto" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Crystal_Mill%2C_Colorado.jpg/800px-Crystal_Mill%2C_Colorado.jpg"</div>' + '</div>' + '</div>';
  //
  //   var infowindow = new google.maps.InfoWindow({
  //       content: contentString
  //   });
  //
  //   var marker = new google.maps.Marker({
  //       position: crystal,
  //       map: map,
  //       title: 'Crystal'
  //   });
  //
  //   marker.addListener('click', function() {
  //       infowindow.open(map, marker);
  //   });
  //
  //   var ashcroft = {
  //       lat: 39.053601,
  //       lng: -106.79976
  //   };
  //
  //   var contentString = '<div id="content">' +
  //       '<div id="siteNotice">' +
  //       '</div>' +
  //       '<a href = "/town_profile.html?id=6" <h1 id="firstHeading" class="firstHeading">Ashcroft</h1></a>' +
  //       '<div id="bodyContent">' +
  //       '<p><b>Ashcroft</b>, established in 1880, was mined for silver. ' +
  //       'Many of the buildings still standing have false fronts since a television series was filmed there during the 1950s.</p>' +
  //       '<img class="markerInfoPhoto" src = "http://aspenhistory.org/wp-content/uploads/2015/07/tours-museum_images_ashcroft41.jpg"</div>' + '</div>' + '</div>';
  //
  //   var infowindow = new google.maps.InfoWindow({
  //       content: contentString
  //   });
  //
  //   var marker = new google.maps.Marker({
  //       position: ashcroft,
  //       map: map,
  //       title: 'Ashcroft'
  //   });
  //
  //   marker.addListener('click', function() {
  //       infowindow.open(map, marker);
  //   });
  //
  //   var stElmo = {
  //       lat: 38.703365,
  //       lng: -106.346223
  //   };
  //
  //   var contentString = '<div id="content">' +
  //       '<div id="siteNotice">' +
  //       '</div>' +
  //       '<a href = "/town_profile.html?id=7" <h1 id="firstHeading" class="firstHeading">St Elmo</h1></a>' +
  //       '<div id="bodyContent">' +
  //       '<p><b>St Elmo</b>, established in 1880, was initially mined for gold then silver and finally hard rock. ' +
  //       'There was a St Elmo\'s fire in 2002 that burned down the town hall and a few other buildings. However, several buildings still stand, and tourism brings many people there each year.</p>' +
  //       '<img class="markerInfoPhoto" src = "https://static1.squarespace.com/static/5537f7d8e4b0dacdf31a3305/t/56c14133cf80a1dd4319c578/1455505765867/Cash-Williams+Building+St+Elmo+Colorado"</div>' + '</div>' + '</div>';
  //
  //   var infowindow = new google.maps.InfoWindow({
  //       content: contentString
  //   });
  //
  //   var marker = new google.maps.Marker({
  //       position: stElmo,
  //       map: map,
  //       title: 'St Elmo'
  //   });
  //
  //   marker.addListener('click', function() {
  //       infowindow.open(map, marker);
  //   });
  //
  //   var animasFork = {
  //       lat: 37.932293,
  //       lng: -107.570046
  //   };
  //
  //   var contentString = '<div id="content">' +
  //       '<div id="siteNotice">' +
  //       '</div>' +
  //       '<a href = "/town_profile.html?id=8" <h1 id="firstHeading" class="firstHeading">Animas Fork</h1></a>' +
  //       '<div id="bodyContent">' +
  //       '<p><b>Animas Fork</b>, established in 1873, was founded for silver mining. ' +
  //       'It is a tourist attraction to this day with several structures still standing and reinforced.</p>' +
  //       '<img class="markerInfoPhoto" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/2006-07-19_Animas_Forks%2C_Colorado.jpg/1920px-2006-07-19_Animas_Forks%2C_Colorado.jpg"</div>' + '</div>' + '</div>';
  //
  //   var infowindow = new google.maps.InfoWindow({
  //       content: contentString
  //   });
  //
  //   var marker = new google.maps.Marker({
  //       position: animasFork,
  //       map: map,
  //       title: 'Animas Fork'
  //   });
  //
  //   marker.addListener('click', function() {
  //       infowindow.open(map, marker);
  //   });
  //
  //   var gilman = {
  //       lat: 39.532764,
  //       lng: -106.393918
  //   };
  //
  //   var contentString = '<div id="content">' +
  //       '<div id="siteNotice">' +
  //       '</div>' +
  //       '<a href = "/town_profile.html?id=9" <h1 id="firstHeading" class="firstHeading">Gilman</h1></a>' +
  //       '<div id="bodyContent">' +
  //       '<p><b>Gilman</b>, established in 1886, was founded for gold and silver mining. ' +
  //       'It was abandoned in 1984 by order of the EPA due to toxic pollutants in the water. Gilman is currently on private property and off limits to the public.</p>' +
  //       '<img class="markerInfoPhoto" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/DSCN3044_gilmancliff_e_600.jpg/550px-DSCN3044_gilmancliff_e_600.jpg"</div>' + '</div>' + '</div>';
  //
  //   var infowindow = new google.maps.InfoWindow({
  //       content: contentString
  //   });
  //
  //   var marker = new google.maps.Marker({
  //       position: gilman,
  //       map: map,
  //       title: 'Gilman'
  //   });
  //
  //   marker.addListener('click', function() {
  //       infowindow.open(map, marker);
  //   });
  //
  //   var caribou = {
  //       lat: 39.989987,
  //       lng: -105.512776
  //   };
  //
  //   var contentString = '<div id="content">' +
  //       '<div id="siteNotice">' +
  //       '</div>' +
  //       '<a href = "/town_profile.html?id=10" <h1 id="firstHeading" class="firstHeading">Caribou</h1></a>' +
  //       '<div id="bodyContent">' +
  //       '<p><b>Caribou</b>, established in 1869, produced over $8 million in silver. ' +
  //       'Most of the town was destroyed by fire in 1899, but a few buildings remain.</p>' +
  //       '<img class="markerInfoPhoto" src = "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/CaribouCO-2005.jpg/220px-CaribouCO-2005.jpg"</div>' + '</div>' + '</div>';
  //
  //   var infowindow = new google.maps.InfoWindow({
  //       content: contentString
  //   });
  //
  //   var marker = new google.maps.Marker({
  //       position: caribou,
  //       map: map,
  //       title: 'Caribou'
  //   });
  //
  //   marker.addListener('click', function() {
  //       infowindow.open(map, marker);
  //   });


}
