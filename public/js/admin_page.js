'use strict';

(function () {
  console.log("I'm ready at admin_page.js!");


  function AdminList(users) {
    const obj = users;
    this.id = obj["id"];
    this.username = obj["username"];
    this.email = obj["email"];
  }

// var allUsers;

  $.getJSON('/users')
      .done((users) => {
        // allUsers = users.data;
        var row = users.data;
        console.log(users.data);
        // appendUsersToDOM(allUsers);
        row.map(createList);

      })
      .fail(function(err) {
          console.log(err);
      });



  // function appendUsersToDOM (arr) {
  //   for(var i = 0; i < arr.length; i++){
  //     return createList
  //   }
  // }

  AdminList.prototype.populateRow = function populateRow() {
    var id = "<td>" + this.id + "</td>";
    var username = "<td>" + this.username + "</td>";
    var email = "<td>" +this.email + "</td>";
   $('#admin_full_userlist').append($("<tr>").append(id + username + email));
  };

  function createList(obj) {
    var newList = new AdminList (obj);
    newList.populateRow();
  }

})();




// constructor to get info from db
      //  function UserTown(town) {
      //      const obj = town;
      //      this.id = obj["id"];
      //      this.townPhoto = obj["photo_url"];
      //      this.townName = obj["name"];
      //      this.townShortDesc = obj["short_desc"];
      //      console.log("I'm getting to line 25");
      //  }
      //  UserTown.prototype.populateCard = function populateCard() {
      //      var townPhoto = "<div class='col s3'>" + "<div class='card small'>" + "<div class='card-image'>" + "<img src= '" + this.townPhoto + "' alt= '" + this.townName + "' class='responsive-img'>";
      //      var townName = "<span class='card-title center-align'>" + this.townName + "</span>" + "</div>";
      //      var mapLink = "<div class='card-content center-align'>" + "<a href=map.html>Visit Map Page</a>" + "<div class='section'>";
      //      var deleteLink = "<div class='divider'></div>" + "</div>" + "<div class='card-content'>" + "<a href='#' id='deleteTown'>Delete from List</a></div></div></div></div>";
      //      // $('#townShortDesc').text(this.townShortDesc);
      //      $('.wantTownCard').html(townPhoto + townName + mapLink + deleteLink);
      //      $('.beenTownCard').html(townPhoto + townName + mapLink + deleteLink);
      //  };
