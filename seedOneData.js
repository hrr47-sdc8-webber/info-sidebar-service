const faker = require('faker');
const db = require('./database-mysql/index.js');
const helpers = require('./convenience-functions/randomData.js');

module.exports.seedOne = function() {
  const companyName = faker.company.companyName();
  const website = faker.internet.url();
  const streetAddress = faker.address.streetAddress();
  const city = faker.address.city();
  const state = faker.address.state();
  const zip = faker.address.zipCode();
  const phone = faker.phone.phoneNumber();
  const writtenReview = faker.lorem.words(80);
  const scoreOne = helpers.generateScore();
  const scoreTwo = helpers.generateScore();
  const scoreThree = helpers.generateScore();
  const start = helpers.openingHours();
  const end = helpers.closingHours();
  const averagePrice = faker.commerce.price();
  const singleSentenceDescriptor = faker.lorem.sentence();
  const neighborhood = faker.lorem.words(1);
  const typeOfFood = faker.lorem.words(1);
  let idNumber;

  return Promise.resolve(db.populateRestaurantsWithID(companyName, website, phone))
    .then((data) => {
      idNumber = data.insertId;
      return db.populateAddresses(streetAddress, city, state, zip, companyName, idNumber);
    })
    .then(() => {
      return db.populateStoreHours(start, end, companyName, idNumber);
    })
    .then(() => {
      return db.populateRatings(
        scoreOne, scoreTwo, scoreThree,
        writtenReview, companyName, averagePrice,
        singleSentenceDescriptor,
        neighborhood, typeOfFood, idNumber,
      );
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports.deleteTestData = () => {
  return db.deleteTestData();
};
