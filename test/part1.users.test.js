'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const { suite, test } = require('mocha');
const bcrypt = require('bcrypt-as-promised');
const request = require('supertest');
const knex = require('../knex');
const server = require('../server');

suite('users', () => {
  before((done) => {
    // knex.migrate.rollback()
    knex.migrate.latest()
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
  });
  beforeEach((done) => {
    knex.seed.run()
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
  });
  afterEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
      done();
    });
  });

  test('POST /users', (done) => {
  const password = 'ilikebigcats';

  request(server)
    .post('/users')
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send({
      email: 'john.siracusa@gmail.com',
      username: 'sir John',
      password,
      is_admin: false,
      location_city: "Boulder",
      location_state: "Colorado"
    })
    .expect('Content-Type', /json/)
    .expect(200, {
      email: 'john.siracusa@gmail.com',
      username: 'sir John',
      is_admin: false,
      location_city: "Boulder",
      location_state: "Colorado"
    })
    .end((httpErr, _res) => {
      if (httpErr) {
        return done(httpErr);
      }

      knex('users')
        .where('id', 2)
        .first()
        .then((user) => {
          const hashedPassword = user.hashed_password;

          delete user.hashed_password;

          assert.deepEqual(user, {
            email: 'john.siracusa@gmail.com',
            username: 'sir John',
            is_admin: false,
            location_city: "Boulder",
            location_state: "Colorado"
          });

          const isMatch = bcrypt.compare(password, hashedPassword);

          assert.isTrue(isMatch, "passwords don't match");
          done();
        })
        .catch((dbErr) => {
          done(dbErr);
        });
    });
});
});
