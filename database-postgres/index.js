const pgp = require('pg-promise')();

module.exports = pgp('postgres://kentwang:password@localhost:5432/kelpsummaries');