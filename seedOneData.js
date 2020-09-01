const faker = require('faker');
const db = require('./database-mysql/index.js');
const helpers = require('./convenience-functions/randomData.js');

module.exports.seedOne = () => {
  const companyName = `Stevens' Kitchen`;
  const website = `http://stevenskitchen.com`;
  const streetAddress = `505 California St`;
  const city = `San Fransisco`;
  const state = `California`;
  const zip = 94104;
  const phone = `415-345-7890`;
  const writtenReview = faker.lorem.words(80);
  const scoreOne = helpers.generateScore();
  const scoreTwo = helpers.generateScore();
  const scoreThree = helpers.generateScore();
  const start = helpers.openingHours();
  const end = helpers.closingHours();
  const averagePrice = faker.commerce.price();
  const singleSentenceDescriptor = faker.lorem.sentence();
  const neighborhood = `San Fran`;
  const typeOfFood = `TexMex`;
  let idNumber;

  db.populateRestaurants(companyName, website, phone)
    .then((data) => {
      idNumber = data.insertId;
      db.populateAddresses(streetAddress, city, state, zip, companyName, idNumber);
    })
    .then(() => db.populateStoreHours(start, end, companyName, idNumber))
    .then(() => db.populateRatings(
      scoreOne, scoreTwo, scoreThree,
      writtenReview, companyName, averagePrice,
      singleSentenceDescriptor,
      neighborhood, typeOfFood, idNumber,
    ))
    .then(() => {
      Promise.resolve(idNumber);
    })
    .catch((error) => {
      console.log(error);
    });

};

module.exports.deleteTestData = (dbID) => db.deleteTestData(dbID);
