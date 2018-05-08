const faker = require('faker');
const db = require('./index.js');
const fs = require('fs');

// const sql = fs.readFileSync(__dirname + '/schema.sql', 'utf8').toString();

// db.query(sql)
//   .then(() => {
//     console.log(`schema'd`);
//   })
//   .catch((err) => {
//     console.log('err:', err);
//   });

// var insertArr = [
//   id: i,
//   name: faker.company.companyName(),
//   neighborhood: faker.address.streetAddress(),
//   address: faker.address.streetName(),
//   city: faker.address.city(),
//   state: faker.address.state(),
//   postalCode: faker.address.zipCode(),
//   latitude: faker.address.latitude(),
//   longitude: faker.address.longitude(),
//   stars: Math.floor(Math.random() * Math.floor(6)),
//   reviewCount: Math.floor(Math.random() * Math.floor(1000)),
//   phone: faker.phone.phoneNumber(),
// ]
var count = 0;

for (let i = 0; i < 5000; i++) { 
  var insertArr = [];
  for(let j = 0; j < 2000; j++) {
    count++;
    const restaurant = `${count}|${faker.company.companyName()}|${faker.address.streetAddress()}|${faker.address.streetName()}|${faker.address.city()}|${faker.address.state()}\
|${faker.address.zipCode()}|${faker.address.latitude()}|${faker.address.longitude()}|${Math.floor(Math.random() * Math.floor(6))}|${Math.floor(Math.random() * Math.floor(1000))}\
|${faker.phone.phoneNumber()}|${faker.commerce.productAdjective()}|${faker.commerce.product()}|${faker.commerce.productName()}`;
    insertArr.push(restaurant);
  }

  if (count % 10000 === 0) {
    console.log ('restaurant batch ', count);
  }
  fs.appendFileSync('./restaurantsData', insertArr.join('\n') + '\n');
}

  // for (let i = 1; i < 101; i++) { 

  //   let id = i
  //   let restaurant_id = i;
  //   let category1 = faker.commerce.productAdjective();
  //   let category2 = faker.commerce.product();
  //   let category3 = faker.commerce.productName();
    

  //   let categoriesQuery = `INSERT INTO categories (id, restaurant_id, category1, category2, category3) 
  //                          VALUES (${id}, ${restaurant_id}, '${category1}', '${category2}', '${category3}')`;

  //   db.none(categoriesQuery)
  //     .then(() => {
  //       console.log('inserted categories');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
