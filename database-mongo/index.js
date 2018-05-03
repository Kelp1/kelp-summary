const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/welp';
const db = mongoose.connect(mongoUri);

module.exports = db;
