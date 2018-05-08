const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/kelp';
const db = mongoose.connect(mongoUri);

module.exports = db;
