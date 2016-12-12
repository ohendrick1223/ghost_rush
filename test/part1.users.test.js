'use strict';
process.env.NODE_ENV = 'test';

const request = require('supertest');
const expect = require('chai').expect;
// const { suite, test } = require('mocha');
const mocha = require('mocha');
const server = require('../server');
const knex = require('../knex');
// const assert = require('chai').assert;

var allUsers = null;


// suite('part1 users route', () => {

//TODO add hardcoded users for the test to run the get method; check for the mistakes like too many users, -users, user without the username etc



beforeEach(done => {
  Promise.all([
    knex('users').insert({id:2, username: "Dr Brew", email: "test@test.com", password: "bluebird", location_city: "Boulder", location_state: "Colorado"}),
    knex('users').insert({id:3, username: "KittyCat", email: "test2@test.com", password: "redbird", location_city: "Fort Collins", location_state: "Colorado"}),
    knex('users').insert({id:4, username: "GoodDog", email: "test3@test.com", password: "yellowbird", location_city: "Loveland", location_state: "Colorado"})
  ]).then(() => done ());
});
console.log('users');

afterEach(done => {
  knex('users').del().then(() => done());
});

// beforeEach((done) => {
//   knex.migrate.latest().then(() => {
//     knex.seed.run().then(() =>{
//       knex('users').then(users => {
//         allUsers = users;
//         done();
//       });
//     });
//   });
// });
//
// afterEach((done) => {
//   knex.migrate.rollback()
//   .then(() => {
//     done();
//   });
// });



xdescribe('GET /users', () => {
    it('responds with JSON', done => {
        request(server)
            .get('/users')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('returns an array of all users objects when responding with JSON', done => {
    request(server)
      .get('/users')
      .end((err, res) => {
        expect(res.body).to.deep.equal([{
          id: 2,
          username: "Dr Brew",
          email: "test@test.com",
          location_city: "Boulder",
          location_state: "Colorado"
        }, {
          id: 3,
          username: "KittyCat",
          email: "test2@test.com",
          location_city: "Fort Collins",
          location_state: "Colorado"
        }, {
          id: 4,
          username: "GoodDog",
          email: "test3@test.com",
          location_city: "Loveland",
          location_state: "Colorado"
        }]);
        done();
      });
  });
});



//returning all towns
//   test('GET /users', function() {
//   it('respond with json', function(done) {
//     request(server)
//       .get('/users')
//       .set('Accept', 'application/json')
//       .expect(200)
//       .end(function(err, res) {
//         if (err) return done(err);
//         done();
//       });
//   });
// });
//returning all towns insted of users, an it passing test
//   test('GET /users/9000', () => {
//     it('gets all users', done => {
//       request(server)
//       .get('/users')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /plain/)
//       // .end((err,res) => {
//       //   expect(res.body.length).to.equal(allUsers.length);
//       .expect(404, 'Not Found', done);
//         done();
//
//       // });
//     });
// });
// //expected 404 "Not Found", got 200 "OK"
// test('GET /users/-1', (done) => {
//   request(server)
//       .get('/users/-1')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(404, 'Not Found', done);
//   });

describe('POST /users', () => {

  var newUser = {
    users: {
      id: 5,
      username: "Boo",
      email: "testing@testing.com",
      password:"agent007",
      location_city: "Loveland",
      location_state: "Colorado"
    }
  };

  it('responds with JSON', done => {
    request(server)
      .post('/users')
      .type('form')
      .send(newUser)
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('adds the new user to the database', done => {
    request(server)
      .post('/users')
      .type('form')
      .send(newUser)
      .end((err, res) => {
        knex('users').select().then(users => {
          expect(users).to.deep.include(newUser.user);
          done();
        });
      });
  });

});

xdescribe('DELETE /users/:id', () => {
});
// });
