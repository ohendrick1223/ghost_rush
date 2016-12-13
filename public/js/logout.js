'use strict';


(function() {
console.log("getting to logout.js");
  $('.button-collapse').sideNav();

  $(".logOut").click((event) => {
    event.preventDefault();

    const options = {
      contentType: 'application/json',
      dataType: 'json',
      type: 'DELETE',
      url: '/auth/:id'
    };

    $.ajax(options)
      .done(() => {
        window.location.href = '../index.html';
      })
      .fail(($xhr) => {
        Materialize.toast($xhr.responseText, 3000);
      });
  });
})();
