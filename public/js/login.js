'use strict';
// id="signUpContainer"
// id="loginEmailInput"
// id="loginPassInput"
// id="logInSubmitButton"

(function() {

  $('.button-collapse').sideNav();

  $('#loginContainer').submit((event) => {
    event.preventDefault();

    const email = $('#loginEmailInput').val().trim();
    const password = $('#loginPassInput').val();

    if (!email) {
      return Materialize.toast('Email must not be blank', 3000);
    }

    if (!password) {
      return Materialize.toast('Password must not be blank', 3000);
    }

    const options = {
      contentType: 'application/json',
      data: JSON.stringify({ email, password }),
      dataType: 'json',
      type: 'POST',
      url: '/auth'
    };

    $.ajax(options)
      .done(() => {
        window.location.href = '../map.html';
      })
      .fail(($xhr) => {
        Materialize.toast($xhr.responseText, 3000);
      });
  });
})();
