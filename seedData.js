const db = require('./database-mysql/index.js');
const helpers = require('./convenience-functions/randomData.js');
const faker = require('faker');

let i = 0;

while (i < 100) {
  let companyName = faker.company.companyName();
  let website = faker.internet.url();
  let streetAddress = faker.address.streetAddress();
  let city = faker.address.city();
  let state = faker.address.state();
  let zip = faker.address.zipCode();
  let phone = faker.phone.phoneNumber();
  let writtenReview = faker.lorem.paragraph();
  let scoreOne = helpers.generateScore();
  let scoreTwo = helpers.generateScore();
  let scoreThree = helpers.generateScore();
  let start = helpers.openingHours();
  let end = helpers.closingHours();

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
    db.populateRatings(scoreOne, scoreTwo, scoreThree, writtenReview, companyName, idNumber)
  })
  .then(() => {
    console.log('Data successfully saved.')
  })
  .catch((error) => {
    console.log(error)
  })
  i++;
}

