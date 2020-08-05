const mysql = require('mysql');
const mySqlConfig = require('./config.js')
const faker = require('faker');
const convenienceFunctions = require('../convenience-functions');

const connection = mysql.createConnection(mysqlConfig);

const populateRestaurants = function(companyName, website, phone) {
  return new Promise(function (resolve, reject) {
    connection.query(`INSERT INTO Restaurants (Restaurant_Name, Website, Telephone) VALUES(${companyName}, ${website}, ${phone})`, function (error, results, fields) {
      if (error) {
        reject(error)
      } else {
        resolve(results)
      }
    })
  })
}

const populateAddresses = function(streetAddress, city, state, zipCode, companyName) {
  return new Promise(function(resolve, reject) {
    connection.query(`INSERT INTO Addresses (Street_Address, City, USA_State, Zip_Code, RestaurantID) VALUES(${streetAddress}, ${city}, ${state}, ${zipCode}, (SELECT Restaurant_ID FROM Restaurants where Restaurant_Name=${companyName}));`, function(error, results, fields) {
      if (error) {
        reject(error)
      } else {
        resolve(results)
      }
    })
  })
}

const populateStoreHours = function(start, end) {
  return new Promise(function(resolve, reject) {
    connection.query(`INSERT INTO Opening_Times(Start_Hour, End_Hour, RestaurantID) VALUES(${start}, ${end}), (SELECT Restaurant_ID FROM Restaurants where Restaurant_Name=${companyName})`, function(error, results, fields) {
      if (error) {
        reject(error)
      } else {
        resolve(results)
      }
    })
  })
}









    //populate data from faker here...
    let companyName = faker.company.companyName();
    let website = faker.internet.url();
    let descriptorOne = faker.company.catchPhraseDescriptor();
    let descriptorTwo = faker.company.catchPhraseDescriptor();
    let descriptorThree = faker.company.catchPhraseDescriptor();
    let streetAddress = faker.address.streetAddress();
    let city = faker.address.city();
    let state = faker.address.state();
    let zip = faker.address.zipCode();
    let phone = faker.phone.phoneNumber();
    let scoreOne = convenienceFunctions.generateScore()
    let scoreTwo = convenienceFunctions.generateScore()
    let scoreThree = convenienceFunctions.generateScore()
