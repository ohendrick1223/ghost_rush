'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/ghost_towns_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/ghost_towns_test',
    debug: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    debug: true
  }
};
