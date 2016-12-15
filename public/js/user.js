'use strict';
console.log("Getting to users.js");
$('document').ready(function() {
    console.log("Let's explore!");
    // $('#wantToGo').click((event) => {
    //     event.preventDefault();
        // need code for getting "want to go" or "visited" button clicks from user
        $.getJSON('/towns')
            .done((town) => {
                var card = town;
                card.map(renderCards);
                console.log(town);
            })
            .fail(function(err) {
                console.log(err);
            });
        // constructor to get info from db
        function UserTown(town) {
            const obj = town;
            this.id = obj["id"];
            this.townPhoto = obj["photo_url"];
            this.townName = obj["name"];
            this.townShortDesc = obj["short_desc"];
            console.log("I'm getting to line 25");
        }
        UserTown.prototype.populateCard = function populateCard() {
            var townPhoto = "<div class='col s3'>" + "<div class='card small'>" + "<div class='card-image'>" + "<img src= '" + this.townPhoto + "' alt= '" + this.townName + "' class='responsive-img imageSizing'>";
            var townName = "<span class='card-title center-align'>" + this.townName + "</span>" + "</div>";
            var mapLink = "<div class='card-content center-align'>" + "<a href=map.html>Visit Map Page</a>" + "<div class='section'>";
            var deleteLink = "<div class='divider'></div>" + "</div>" + "<div class='card-content'>" + "<a href='#' id='deleteTown'>Delete from List</a></div></div></div></div>";
            // $('#townShortDesc').text(this.townShortDesc);

            $('.wantTownCard').append(townPhoto + townName + mapLink + deleteLink);

            $('.beenTownCard').append(townPhoto + townName + mapLink + deleteLink);
        };

        $.getJSON('/users')
            .done((user) => {
                // infoBox.map(renderUserInfo);
                console.log(user);

            })
            .fail(function(err) {
                console.log(err);
            });

function UserInfo(user) {
  const obj = user;
  this.id = obj["id"];
  this.username = obj["username"];
  this.location_city = obj["location_city"];
  this.location_state = obj["location_state"];
  console.log(obj);
}



        // render to user info box
        UserInfo.prototype.populateInfoBox = function populateInfoBox() {
        $('.profileInfoBox').html("<p class='center-align'>" + this.username + "</p>" + "<p class='center-align'>" + this.location_city + "</p>" + "<p class'center-align'>" + this.location_state + "</p>");
      };


function renderCards(obj) {
  var newCard = new UserTown(obj);
  newCard.populateCard();
}

// function renderUserInfo(obj) {
//   var newUser = new UserInfo(obj);
//   newUser.populateInfoBox();
// }

    // })
});
