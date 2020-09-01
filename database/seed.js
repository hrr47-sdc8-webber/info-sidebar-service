const helpers = require('./convenience-functions/randomData.js');
const faker = require('faker');
const db = require('./index.js');

var generate1kRestaurants = function () {
  return new Promise((resolve, reject) => {
    const restaurants = [];
    for (let i=0; i<= 1000; i++) {
      const restaurant = {};
      restaurant.companyName = faker.company.companyName();
      restaurant.website = faker.internet.url();
      restaurant.streetAddress = faker.address.streetAddress();
      restaurant.city = faker.address.city();
      restaurant.state = faker.address.state();
      restaurant.zip = faker.address.zipCode();
      restaurant.phone = faker.phone.phoneNumber();
      restaurant.writtenReview = faker.lorem.words(80);
      restaurant.scoreOne = helpers.generateScore();
      restaurant.scoreTwo = helpers.generateScore();
      restaurant.scoreThree = helpers.generateScore();
      restaurant.start = helpers.openingHours();
      restaurant.end = helpers.closingHours();
      restaurant.averagePrice = faker.commerce.price();
      restaurant.singleSentenceDescriptor = faker.lorem.sentence();
      restaurant.neighborhood = faker.lorem.words(1);
      restaurant.typeOfFood = faker.lorem.words(1);

      restaurants.push(restaurant);
    }
    db.Restaurants.insertMany(restaurants, (err, docs) => {
      if (err) {
        reject(err);
      } else {
        console.log('Restaurant added!');
        resolve(1);
      }
    });
  })
};

async function generateAll() {
  for (let i = 0; i < 10000; i++) {
    await generate1kRestaurants();
  }
}

generateAll();


// documents.map(document => {
//   const place = new Restaurants({
//     companyName: document.companyName,
//     website: document.website,
//     streetAddress: document.streetAddress,
//     city: document.city,
//     state: document.state,
//     zip: document.zip,
//     phone: document.phone,
//     writtenReview: document.writtenReview,
//     scoreOne: document.scoreOne,
//     scoreTwo: document.scoreTwo,
//     scoreThree: document.scoreThree,
//     start: document.start,
//     end: document.end,
//     averagePrice: document.averagePrice,
//     singleSentenceDescriptor: document.singleSentenceDescriptor,
//     neighborhood: document.neighborhood,
//     typeOfFood: document.typeOfFood
//   });
//   place.save();
//   console.log('File Added');
// });