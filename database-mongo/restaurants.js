// set schema
const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const restaurantSchema = new mongoose.Schema({
  id: Number,
  name: String,
  neighborhood: String,
  address: String,
  city: String,
  state: String,
  postalCode: String,
  latitude: Number,
  longitude: Number,
  stars: Number,
  reviewCount: Number,
  categories: [String],
  phone: String,
});

// set model
const Restaurants = mongoose.model('Restaurant', restaurantSchema);

// get method
function fetchInfo(redis, query, callback) {
  redis.get(query, function (err, reply) {
    if (err) {
      callback(null);
    } else if (reply) {
      callback(JSON.parse(reply));
    } else {
      Restaurants.find({id: query}, (err, result) => {
        if (err) {
        console.log(err);
        } else {
          redis.set(query, JSON.stringify(result), () => callback(result));
        }
      });
    }
  })
}
// // export to  use
module.exports.fetchInfo = fetchInfo;
module.exports.Restaurants = Restaurants;
