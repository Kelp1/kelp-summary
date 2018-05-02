// set schema
const mongoose = require('mongoose');

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
function fetchInfo(query, callback) {
  Restaurants.find(query, (err, results) => {
    if (err) {
    // console.err(err);
    } else {
      callback(null, results);
    }
  });
}
// // export to  use
module.exports.fetchInfo = fetchInfo;
module.exports.Restaurants = Restaurants;
