const model = require('./index.js');
const RestaurantsData = require('./RestaurantsData.js');

model.Restaurants.collection.insertMany(RestaurantsData);
