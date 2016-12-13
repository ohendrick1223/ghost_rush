'use strict';

(function() {

console.log("I'm ready!");

  const urlParams = new URLSearchParams(window.location.search);

  urlParams.get('id');

  const townID = urlParams.get('id');

  const townAPIroute = '/towns/' + townID;

  $('document').ready(function() {

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
});

  function Town (town) {
   const obj = town;
   this.id = obj[ "id" ];
   this.townPhoto = obj[ "photo_url" ];
   this.townName = obj[ "name" ];
   this.latlon = (parseFloat( obj[ "latitude" ] ) + ", " + parseFloat( obj[ "longitude" ] )).toString()

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

//wantToGo Button
$("wantToGo").on('click', function (){
  console.log('click);
})

})();
