const faker = require('faker');
// const db = require('./index.js');
const fs = require('fs');
const argv = require('yargs').argv
const helpers = require('./convenience-functions/randomData.js');

const lines = argv.lines || 10000000;
const filename = argv.output || 'restaurants.csv';
const stream = fs.createWriteStream(filename);

const createRestaurant = () => {
  const companyName = faker.company.companyName(0);
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

  return `${companyName},${website},${streetAddress},${city},${state},${zip},${phone},${writtenReview},${scoreOne},${scoreTwo},${scoreThree},${start},${end},${averagePrice},${singleSentenceDescriptor},${neighborhood},${typeOfFood}\n`
}

const startWriting = (writeStream, encoding, done) => {
  let i = lines
  function writing(){
    let canWrite = true
    do {
      i--
      let restaurant = createRestaurant()
      //check if i === 0 so we would write and call `done`
      if(i === 0){
        // we are done so fire callback
        writeStream.write(restaurant, encoding, done)
      }else{
        // we are not done so don't fire callback
        writeStream.write(restaurant, encoding)
      }
      //else call write and continue looping
    } while(i > 0 && canWrite)
    if(i > 0 && !canWrite){
      //our buffer for stream filled and need to wait for drain
      // Write some more once it drains.
      writeStream.once('drain', writing);
    }
  }
  writing()
}

stream.write(`companyName,website,streetAddress,city,state,zip,phone,writtenReview,scoreOne,scoreTwo,scoreThree,start,end,averagePrice,singleSentenceDescriptor,neighborhoodtypeOfFood\n`, 'utf-8');

startWriting(stream, 'utf-8', () => {
  stream.end()
})