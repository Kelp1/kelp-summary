const db = require ('./restaurants.js');
const mongoose = require('mongoose');
const faker = require ('faker');

let summariesArr = [];

for (let j = 0; j < 50; j++) {
  let line = {
    id: j,
    name: faker.company.companyName(),
    neighborhood: faker.address.streetName(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    postalCode: faker.address.zipCode(),
    latitude: Math.floor((Math.random() * 15) + 35),
    longitude: Math.floor((Math.random() * 40) - 120),
    stars: Math.floor(Math.random() * Math.floor(6)),
    reviewCount: Math.floor(Math.random() * Math.floor(1000)),
    categories: [faker.commerce.productAdjective(), faker.commerce.product(), faker.commerce.productName()],
    phone: faker.phone.phoneNumber(),
  };
  summariesArr.push(line);
}

db.Restaurants.insertMany(summariesArr)
  .then(()=> mongoose.disconnect());

