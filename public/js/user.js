'use strict';

$('document').ready(function() {
    console.log("Let's explore!");

    // need code for getting "want to go" or "visited" button clicks from user

    // constructor to get info from db
    function UserTown(town) {
        const obj = town;
        this.id = obj["id"];
        this.townPhoto = obj["photo_url"];
        this.townName = obj["name"];
        this.townShortDesc = obj["short_desc"];
    }

// get town information from db for card
    $.getJSON('/towns')
        .done((town) => {
            console.log(town[0]);
            var card = new UserTown(town[0]);
            card.populateCard();
        })
        .fail(function(err) {
            console.log(err);
        });

    //function to populate card
    UserTown.prototype.populateCard = function populateCard() {
        $('#image').attr({
            src: this.townPhoto,
            alt: this.townName
        });
        $('#townName').text(this.townName);
        $('#townShortDesc').text(this.townShortDesc);
    };

});
