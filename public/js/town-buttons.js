'use strict';

function UserTownEntryRequest( currentTown, usersID ) {
  this.towns_id = currentTown.id;
  this.users_id = "help"; //TODO: figure out how to acces the token for users_id
}



// .beenThere - set visited to true
UserTownEntryRequest.prototype.beenthere = function() {
  this.visited = true;
  return {
    this.visited: true
  };
};
UserTownEntryRequest.prototype.wantToGo = function() {
  this.visited = false;
  return {
    this.visited: false
  };
}

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
}

// listen for click on div #buttonsContainer


function buttonsContainerClicked() {
  var target = event.target
    // if target is neither #wantToGo nor #beenThere then return
  if ( !target.id.is( 'wantToGo' ) && !target.id.is( 'beenThere ' ) ) {
    return;
  }
  // create new UserTownEntry as townEntry
  var townEntryRequest = new UserTownEntryRequest( currentTown, userID ) //TODO make userID param specific
    // check database for existing entry (users_id && towns_id === true)
    //TODO CHECK THAT ROUTE BELOW MATCHES ACTUAL ROUTE!!!!!!!
  $.getJSON( '/user_town_lists/validate' )
    .done( ( data ) => {
      // if entry exists
      if ( true ) { //TODO need sample response for conditional!!!!
        // townEntry.toggleVisited
        var townEntry = new UserTownEntry;
        // TODO validate that toggle matches the button
        townEntry.toggleVisited();
        // patch to database
        var patchRoute = '/user_town_lists/' + townEntry.id
        $.ajax( patchRoute, {
          data: townEntry,
          method: 'PATCH'
        } );
        .done( () => {
          //TODO toast success message
        } )
        return;
      } else {
        // if event target = #beenThere
        if ( target.id.is( 'beenThere' ) ) {
          object.assign( townEntryRequest, townEntryRequest.beenThere() )
        }
        // if event target = #wantToGo
        if ( target.id.is( 'wantToGo' ) ) {
          object.assign( townEntryRequest, townEntryRequest.wantToGo() )
        }
        // post to database
        $.post( '/user_town_lists',
          townEntryRequest );
        .done( () => {
          //TODO toast success message
        } )
      }
    } )

}
