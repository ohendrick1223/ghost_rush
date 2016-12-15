'use strict';
$( document ).ready(
  function() {
    const urlParams = new URLSearchParams(window.location.search);

    urlParams.get('id');

    const townID = urlParams.get('id');

    const validateRoute = '/user_town_lists/validate/' + townID;
    console.log('validateRoute: ', validateRoute);

  // listen for click on div #buttonsContainer
  $("#buttonsContainer").click(buttonsContainerClicked);
  // console.log("routes ready!");
  function buttonsContainerClicked() {
    var target = $(event.target);
    console.log("TARGET: ", target);
      // if target is neither #wantToGo nor #beenThere then return
    if ( !target.is( '#wantToGo' ) && !target.is( '#beenThere ' ) ) {
      return;
    }
      // check database for existing entry (users_id && towns_id === true)
    $.getJSON( validateRoute )
      .done( ( data ) => {
        // if entry exists
        console.log("data: ", data);
        const response = data;
        const responseData = response.data
        console.log("HERE'S THE RESPONSE: ", response);
        if ( responseData.length > 0) {
          // townEntry.toggleVisited
          var townEntry = new UserTownEntry(responseData[0]);
          var patchRoute = '/user_town_lists/' + townEntry.id;
          console.log("townEntry.id: ", townEntry.id);
          var updatedData = "";
          console.log("target", target.id);
          if ( target.is( '#beenThere' ) ) {
            updatedData = townEntry.beenThere();
          }
          // if event target = #wantToGo
          if ( target.is( '#wantToGo' ) ) {
            updatedData = townEntry.wantToGo();
          }
          // patch to database

          console.log("patch route: ", patchRoute);

          $.ajax( patchRoute, {
            body: updatedData,
            method: 'PATCH'
          } );
          // .done( () => {
            //TODO toast success message
          // } )
          return;
        } else {
          var userID = response.userId;
          console.log("townID: ", townID);
          console.log("userID: ", userID);
          var townEntryRequest = new NewUserTownEntry(townID,userID);
          // if event target = #beenThere
          var myData = "";

          if ( target.is( '#beenThere' ) ) {
            myData = townEntryRequest.beenThere();
          }
          // if event target = #wantToGo
          if ( target.is( '#wantToGo' ) ) {
            // townEntryRequest.wantToGo();
            myData = townEntryRequest.wantToGo();
          }
          // post to database
          $.ajax({
            url: '/user_town_lists',
            method: 'POST',
            dataType: 'json',
            data: myData,
            context: townEntryRequest,
            complete: function(){
              console.log("finished!")
            }
          })
          // $.post( '/user_town_lists',
          //   townEntryRequest );
          // .done( () => {
            //TODO toast success message
          // } )
        }
      } );

  }

  function NewUserTownEntry( townID, usersID ) {
    console.log("CREATING newUserTownEntry");
    this.towns_id = townID;
    this.users_id = usersID;
    // this.visited = false;
    this.visited = true;
    console.log("VISITED: ", this.visited);
  }


  NewUserTownEntry.prototype.beenThere = function() {
    console.log("ABOUT TO SET VISITED");
    this.visited = true;
        return { "towns_id":this.towns_id, "users_id":this.users_id, "visited":this.visited };
  };
  NewUserTownEntry.prototype.wantToGo = function() {
    console.log("THIS in Want to Go: ", this);
    console.log("this.visited: ", this.visited);
    this.visited = false;

    return { "towns_id":this.towns_id, "users_id":this.users_id, "visited":this.visited };
  };

  function UserTownEntry( responseObject ) {
    const obj = responseObject;
    this.id = parseInt( obj.id );
    this.towns_id = parseInt( obj[ "towns_id" ] );
    this.users_id = parseInt( obj[ "users_id" ] );
    this.visited = obj[ "visited" ];
  }
  UserTownEntry.prototype.beenThere = function() {
    console.log("ABOUT TO SET VISITED");
    this.visited = true;
        return { "id":this.id, "towns_id":this.towns_id, "users_id":this.users_id, "visited":this.visited };
  };
  UserTownEntry.prototype.wantToGo = function() {
    console.log("THIS in Want to Go: ", this);
    console.log("this.visited: ", this.visited);
    this.visited = false;

    return { "id":this.id, "towns_id":this.towns_id, "users_id":this.users_id, "visited":this.visited };
  };
  // .toggleVisited - change true to false and false to true
  UserTownEntry.prototype.toggleVisited = function() {
    if ( this.visited ) {
      this.visited = false;
    } else {
      this.visited = true;
    }
  };
} );
