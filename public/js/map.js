'use strict';
console.log("I'm loaded");
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

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: tarryall
    });

    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Teller City<a href = "http://"</h1>' +
        '<div id="bodyContent">' +
        '<p><b>Teller City</b>, established in 1879, was founded due to large amounts of silver in the area. ' +
        'Now, a completely abandoned town, Teller City has numerous remains of log cabins.</p>' +
        '<div id="bodyContent"><img src = "http://www.passportintime.com/images/co01_mb-r_tellercity_oldhot.jpg"</div>' + '</div>' + '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var tellerCity = {
        lat: 40.433316,
        lng: -106.003351
    };

    var marker = new google.maps.Marker({
        position: tellerCity,
        map: map,
        title: 'Teller City'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}
