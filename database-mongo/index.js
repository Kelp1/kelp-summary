const mongoose = require('mongoose');

const mongoUri = 'mongodb://kelpsummaries:kelpsummaries@ds119660.mlab.com:19660/kelp-summaries';
const db = mongoose.connect(mongoUri);

module.exports = db;
