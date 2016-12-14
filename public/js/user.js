'use strict';

$('document').ready(function() {
    console.log("Let's explore!");

    // need code for getting "want to go" or "visited" button clicks from user

    // constructor to get info from db


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


    function UserTown(town) {
        const obj = town;
        this.id = obj["id"];
        this.townPhoto = obj["photo_url"];
        this.townName = obj["name"];
        this.townShortDesc = obj["short_desc"];
    }

    UserTown.prototype.populateCard = function populateCard() {
        var townPhoto = "<div class='col s3'>" + "<div class='card small'>" + "<div class='card-image'>" + "<img src= '" + this.townPhoto + "' alt= '" + this.townName + "' class='responsive-img'>";
        var townName = "<span class='card-title center-align'>" + this.townName + "</span>" + "</div>";
        var mapLink = "<div class='card-content center-align'>" + "<a href=map.html>Visit Map Page</a>" + "<div class='section'>";
        var deleteLink = "<div class='divider'></div>" + "</div>" + "<div class='card-content'>" + "<a href='#' id='deleteTown'>Delete from List</a></div></div></div></div>";

        $('.wantTownCard').html(townPhoto + townName + mapLink + deleteLink);

        $('.beenTownCard').html(townPhoto + townName + mapLink + deleteLink);


        // $('#townShortDesc').text(this.townShortDesc);
    };
});
