'use strict';
const urlParams = new URLSearchParams(window.location.search);

urlParams.get('id');

const townID = urlParams.get('id');

const validateRoute = '/user_town_lists/validate/' + townID;
$( document ).ready(
  function() {


  // listen for click on div #buttonsContainer
  $("#buttonsContainer").click(buttonsContainerClicked);
  // console.log("routes ready!");
  function buttonsContainerClicked() {
    console.log("click!");
    var target = event.target;
      // if target is neither #wantToGo nor #beenThere then return
    if ( !target.is( '#wantToGo' ) && !target.is( '#beenThere ' ) ) {
      return;
    }
      // check database for existing entry (users_id && towns_id === true)
    $.getJSON( validateRoute )
      .done( ( data ) => {
        // if entry exists
        const response = data;
        if ( response[0].length > 0) { //TODO need sample response for conditional!!!!
          // townEntry.toggleVisited
          var townEntry = new UserTownEntry(response[0]);
          // TODO validate that toggle matches the button
          console.log("target", target.id);
          if ( target.is( '#beenThere' ) ) {
            townEntry.beenThere();
          }
          // if event target = #wantToGo
          if ( target.is( '#wantToGo' ) ) {
            townEntry.wantToGo();
          }
          // patch to database
          var patchRoute = '/user_town_lists/' + townEntry.id;
          $.ajax( patchRoute, {
            body: townEntry,
            method: 'PATCH'
          } );
          // .done( () => {
            //TODO toast success message
          // } )
          return;
        } else {
          var userID = response[1];
          var townEntryRequest = new NewUserTownEntry(townID,userID);
          // if event target = #beenThere
          if ( target.is( '#beenThere' ) ) {
            townEntryRequest.beenThere();
          }
          // if event target = #wantToGo
          if ( target.is( '#wantToGo' ) ) {
            townEntryRequest.wantToGo();
          }
          // post to database
          $.post( '/user_town_lists',
            townEntryRequest );
          // .done( () => {
            //TODO toast success message
          // } )
        }
      } );

  }

  function NewUserTownEntry( townID, usersID ) {
    this.towns_id = townID;
    this.users_id = usersID;
    this.visited = false;
  }

  // .beenThere - set visited to true
  NewUserTownEntry.prototype.beenthere = function() {
      this.visited = true;
  };
  NewUserTownEntry.prototype.wantToGo = function() {
    this.visited = false;
  };

  function UserTownEntry( responseObject ) {
    const obj = responseObject;
    this.id = parseInt( obj[ "id" ] );
    this.towns_id = parseInt( obj[ "towns_id" ] );
    this.users_id = parseInt( obj[ "users_id" ] );
    this.visited = obj[ "visited" ];
  }
  // .toggleVisited - change true to false and false to true
  UserTownEntry.prototype.toggleVisited = function() {
    if ( this.visited ) {
      this.visited = false;
    } else {
      this.visited = true;
    }
  };
} );
