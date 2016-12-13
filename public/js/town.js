'use strict';

(function() {

console.log("I'm ready!");

  const urlParams = new URLSearchParams(window.location.search);

  console.log(urlParams.get('id'));

  const townID = urlParams.get('id');
  console.log(townID);

  const townAPIroute = '/towns/' + townID;
  //on click, add ajax call in function

  $('document').ready(function() {
    // console.log('clicked');

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

  //     var $xhr = $.ajax ({
  //       method: 'GET',
  //       url: townAPIroute ,
  //       dataType: 'json'
  //       // console.log(data);
  //     });
  //
  //     console.log($xhr);
  //
  //
  //     $xhr.done(function(data) {
  //       if ($xhr.status !== 200) {
  //         return;
  //       }
  //       var townData = $xhr.responseText;
  //       console.log(townData);
  //
  //       var currentTown = new Town(townData);
  //       var jsonParsedTown =
  //       currentTown.populateTown();
  //     });
  //
  //     $xhr.fail(function(err) {
  //       console.log(err);
  //     });
  // });



  // const renderTown = function(town) {
  //   $('#image').attr({ src: town.photo_url, alt: town.name });
  //   $('#townName').text(town.name);
  //   $('#townLocation').text(town.latitude, town.longitude);
  //   $('#townCemetery').text(town.cemetery);
  //   $('#townEst').text(town.yr_est);
  //   $('#townAbandon').text(town.yr_abnd);
  //   $('#townMaterials').text(town.mineral_found);
  //   $('#townTour').text(town.tour_avail);
  // };


  function Town (town) {
   const obj = town;
   this.id = obj[ "id" ];
   this.townPhoto = obj[ "photo_url" ];
   this.townName = obj[ "name" ];
   this.latitude = parseFloat( obj[ "latitude" ] );
   this.longitude = parseFloat( obj[ "longitude" ] );
   this.townCemetery = obj [ "cemetery" ];
   this.townEst = obj ["yr_est"];
   this.townAbandon = obj ["yr_abnd"];
   this.townMaterials = obj ["mineral_found"];
   this.townTour = obj ["tour_avail"];
   this.townDescThen = obj ["description_then"];
   this.townDescNow = obj ["description_now"];

   Town.prototype.populateTown  = function populateTown () {
     //function to render town
       $('#image').attr({ src: town.photo_url, alt: town.name });
       $('#townName').text(this.townName);
       $('#townLocation').text(town.latitude, town.longitude);
       $('#townCemetery').text(town.cemetery);
       $('#townEst').text(town.yr_est);
       $('#townAbandon').text(town.yr_abnd);
       $('#townMaterials').text(town.mineral_found);
       $('#townTour').text(town.tour_avail);
       $('#townDescThen').text(town.description_now);
       $('#townDescNow').text(town.description_then);
     };
   }

  // const attachListeners = function(book) {
  //   $('#deleteBook').click((event) => {
  //     event.preventDefault();
  //
  //     $('#deleteModal').openModal();
  //   });
  //
  //   $('#confirmDelete').click((event) => {
  //     event.preventDefault();
  //
  //     const options = {
  //       dataType: 'json',
  //       type: 'DELETE',
  //       url: `/books/${book.id}`
  //     };
  //
  //     $.ajax(options)
  //       .done(() => {
  //         window.location.href = '/index.html';
  //       })
  //       .fail(() => {
  //         Materialize.toast('Unable to delete book', 3000);
  //       });
  //   });
  //
  //   $('#addFavorite').click((event) => {
  //     event.preventDefault();
  //
  //     const options = {
  //       contentType: 'application/json',
  //       data: JSON.stringify({ bookId: book.id }),
  //       dataType: 'json',
  //       type: 'POST',
  //       url: '/favorites'
  //     };
  //
  //     $.ajax(options)
  //       .done(() => {
  //         $('#addFavorite').addClass('hide');
  //         $('#removeFavorite').removeClass('hide');
  //
  //         Materialize.toast('Added book to your favorites', 3000);
  //       })
  //       .fail(() => {
  //         Materialize.toast('Unable to add this book to your favorites', 3000);
  //       });
  //   });
  //
  //   $('#removeFavorite').click((event) => {
  //     event.preventDefault();
  //
  //     const options = {
  //       contentType: 'application/json',
  //       data: JSON.stringify({ bookId: book.id }),
  //       dataType: 'json',
  //       type: 'DELETE',
  //       url: '/favorites'
  //     };
  //
  //     $.ajax(options)
  //       .done(() => {
  //         $('#removeFavorite').addClass('hide');
  //         $('#addFavorite').removeClass('hide');
  //
  //         Materialize.toast('Removed book from your favorites', 3000);
  //       })
  //       .fail(() => {
  //         Materialize.toast(
  //           'Unable to remove this book from your favorites',
  //           3000
  //         );
  //       });
  //   });
  // };

  // $.getJSON(`/towns/${townID}`)
  //   .done((town) => {
  //     renderTown(town);
  //     // attachListeners(book);
  //   })
  //   .fail(() => {
  //     Materialize.toast('Unable to retrieve town', 3000);
  //   });

  // $.getJSON('/token')
  //   .done((isLoggedIn) => {
  //     if (!isLoggedIn) {
  //       return;
  //     }
  //
  //     $.getJSON(`/favorites/check?bookId=${bookId}`)
  //       .done((isFavorite) => {
  //         if (isFavorite) {
  //           $('#removeFavorite').removeClass('hide');
  //         }
  //         else {
  //           $('#addFavorite').removeClass('hide');
  //         }
  //       })
  //       .fail(($xhr) => {
  //         Materialize.toast($xhr.responseText, 3000);
  //       });
  //   })
  //   .fail(($xhr) => {
  //     Materialize.toast($xhr.responseText, 3000);
  //   });
})();
