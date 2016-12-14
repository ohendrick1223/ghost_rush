'use strict';

function UserTownEntry() {
  this.towns_id = currentTown.id;
  this.users_id = "help"; //TODO: figure out how to acces the token for users_id
}

// .beenThere - set visited to true
UserTownEntry.prototype.beenthere = function() {
  this.visited = true;
  return {
    this.visited: true
  };
};
UserTownEntry.prototype.wantToGo = function() {
  this.visited = false;
  return {
    this.visited: false
  };
}


// .toggleVisited - change true to false and false to true
UserTownEntry.prototype.toggleVisited = function() {
  if ( this.visited ) {
    this.visited = false;
  } else {
    this.visited = true;
  }
}

// listen for click on div #buttonContainer

// if target is neither #wantToGo nor #beenThere then return

// create new UserTownEntry as townEntry

// check database for existing entry (users_id && towns_id === true)

// if entry exists
// townEntry.toggleVisited
// patch to database

// else{
// if event target = #beenThere
// object.assign(townEntry, townEntry.beenThere())

// if event target = #wantToGo
// object.assign(townEntry, townEntry.wantToGo())

// post to database
//}
