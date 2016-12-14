'use strict';


const boom = require( 'boom' );
const express = require( 'express' );
const jwt = require( 'jsonwebtoken' );
const knex = require( '../knex' );
const router = express.Router();


const authorize = function( req, res, next ) {
  const token = req.cookies.token;

  jwt.verify( token, process.env.JWT_SECRET, ( err, decoded ) => {
    if ( err ) {
      return next( boom.create( 401, 'Unauthorized' ) );
    }
    req.token = decoded;

    next();
  } );
};



router.get( '/user_town_lists', authorize, function( req, res, next ) {

  knex( 'user_town_lists' )
    .innerJoin( 'towns', 'towns.id', 'user_town_lists.towns_id' )
    .where( {
      'id': req.body.user_id,
      'user_town_lists.user_id': req.token.user_id
    } )
    .orderBy( 'towns.name', 'ASC' )
    .then( ( data ) => {
      const list = data;
      res.send( list );
    } )
    .catch( ( err ) => {
      next( err );
    } );
} );


router.post( '/user_town_lists', ( req, res, next ) => {
  const towns_id = Number.parseInt( req.body.towns_id );
  const users_id = Number.parseInt( req.body.users_id );


  if ( !Number.isInteger( towns_id ) ) {
    return next( boom.create( 400, 'towns ID must be an integer' ) );
  }

  knex( 'towns' )
    .where( 'id', towns_id )
    .first()
    .then( ( towns ) => {
      if ( !towns ) {
        throw boom.create( 404, 'towns not found' );
      }

      const insert_user_town_list = {
        visited: req.body.visited,
        towns_id: req.body.towns_id,
        users_id: req.body.users_id
      };

      return knex( 'user_town_lists' )
        .insert( insert_user_town_list, '*' );
    } )

  .then( ( data ) => {
      const user_town_list = data[ 0 ];
      console.log( user_town_list );
      res.send( user_town_list );
    } )
    .catch( ( err ) => {
      next( err );
    } );
} );

router.patch( '/user_town_lists/:id', ( req, res, next ) => {
  const id = Number.parseInt( req.param.id );

  if ( Number.isNaN( id ) ) {
    return next();
  }

  knex( 'user_town_lists' )
    .where( 'id', id )
    .first()
    .then( ( user_town_list ) => {
      if ( !user_town_list ) {
        throw boom.create( 404, 'Not Found' );
      }

      const {
        visited,
        towns_id,
        users_id
      } = req.body;
      const update_user_town_list = {};

      if ( visited ) {
        update_user_town_list.visited = visited;
      }
      if ( towns_id ) {
        update_user_town_list.towns_id = towns_id;
      }
      if ( users_id ) {
        update_user_town_list.users_id = users_id;
      }

      return knex( 'user_town_lists', '*' )
        .where( 'id', id );
    } )
    .then( ( data ) => {
      const user_town_list = ( data[ 0 ] );
      res.send( user_town_list );
    } )
    .catch( ( err ) => {
      next( err );
    } );
} );

router.delete( '/user_town_lists/:id', ( req, res, next ) => {
  const id = Number.parseInt( req.param.id );

  if ( Number.isNaN( id ) ) {
    return next();
  }

  var user_town_list;

  knex( 'user_town_lists' )
    .where( 'id', id )
    .del()
    .then( () => {
      delete user_town_list.id;
      res.send( user_town_list );
    } )
    .catch( ( err ) => {
      next( err );
    } );
} );


module.exports = router;
