'use strict';

(function() {

    $('.button-collapse').sideNav();

    $('#signUpContainer').submit((event) => {
        event.preventDefault();

        const username = $('#usernameInput').val().trim();
        const email = $('#emailInput').val().trim();
        const password = $('#passPhraseInput').val().trim();
        const location_city = $('#cityInput').val();
        const location_state = $('#stateInput').val();

        if (!username) {
            return Materialize.toast('Username must not be blank', 3000);
        }

        if (!email) {
            return Materialize.toast('Email must not be blank', 3000);
        }

        if (!password) {
            return Materialize.toast('Password must not be blank', 3000);
        }

        if (email.indexOf('@') < 0) {
            return Materialize.toast('Email must be valid', 3000);
        }

        if (!password || password.length < 8) {
            return Materialize.toast(
                'Password must be at least 8 characters long',
                3000
            );
        }
        const options = {
            contentType: 'application/json',
            data: JSON.stringify({
                username,
                email,
                password,
                location_city,
                location_state
            }),
            dataType: 'json',
            type: 'POST',
            url: '/users'
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
