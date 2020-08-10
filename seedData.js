const db = require('./database-mysql/index.js');
const helpers = require('./convenience-functions/randomData.js');
const faker = require('faker');

let i = 0;

while (i < 100) {
  const companyName = faker.company.companyName();
  const website = faker.internet.url();
  const streetAddress = faker.address.streetAddress();
  const city = faker.address.city();
  const state = faker.address.state();
  const zip = faker.address.zipCode();
  const phone = faker.phone.phoneNumber();
  const writtenReview = faker.lorem.paragraph();
  const scoreOne = helpers.generateScore();
  const scoreTwo = helpers.generateScore();
  const scoreThree = helpers.generateScore();
  const start = helpers.openingHours();
  const end = helpers.closingHours();
  const averagePrice = faker.commerce.price();
  const singleSentenceDescriptor = faker.lorem.sentence();
  const neighborhood = faker.lorem.words(1);
  const typeOfFood = faker.lorem.words(1);


  var idNumber;

  Promise.resolve(db.populateRestaurants(companyName, website, phone))
    .then((data) => {
      idNumber = data.insertId;
      db.populateAddresses(streetAddress, city, state, zip, companyName, idNumber)
    })
    .then((data) => {
      db.populateStoreHours(start, end, companyName, idNumber)
    })
    .then((data) => {
      db.populateRatings(scoreOne, scoreTwo, scoreThree, writtenReview, companyName, averagePrice, singleSentenceDescriptor, neighborhood, typeOfFood, idNumber)
    })
    .then(() => {
      console.log('Data successfully saved.');
    })
    .catch((error) => {
      console.log(error)
    })
    i++;
}





