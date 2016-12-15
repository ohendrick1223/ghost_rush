'use strict';

(function () {
  console.log("I'm ready at admin_page.js!");


  function AdminList(users) {
    const obj = users;
    this.id = obj["id"];
    this.username = obj["username"];
    this.email = obj["email"];
  }

  $.getJSON('/users')
      .done((users) => {
        var row = users.data;
        console.log(users.data);
        row.map(createList);

      })
      .fail(function(err) {
          console.log(err);
      });


  AdminList.prototype.populateRow = function populateRow() {
    var id = "<td>" + this.id + "</td>";
    var username = "<td>" + this.username + "</td>";
    var email = "<td>" +this.email + "</td>";
    var icon = "<td>" + "<a href='#'><i class='small material-icons'>delete</i></a>" + "</td>";
   $('#admin_full_userlist').append($("<tr>").append(`${id} ${username} ${email} ${icon}`));
  };

  function createList(obj) {
    var newList = new AdminList (obj);
    newList.populateRow();
  }

})();
