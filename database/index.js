const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/welp');

// set schema
const restaurantSchema = Schema({
  id: Number,
  name: String,
  stars: Number,
  reviewCount: Number,
  restaurantsPriceRange2: Number,
  categories: [],
  claimed: Boolean,
  address: String,
  city: String,
  state: String,
  postalCode: String,
  neighborhood: String,
  phoneNumber: String,
  businessId: String,
});
// set model
const Restaurants = mongoose.model('Restaurants', restaurantSchema);

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
