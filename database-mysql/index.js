const mysql = require('mysql');
const mySqlConfig = require('./config.js');
const connection = mysql.createConnection(mySqlConfig);

const populateRestaurants = function(companyName, website, phone) {
  return new Promise(function (resolve, reject) {
    connection.query(`INSERT INTO Restaurants (Restaurant_Name, Website, Telephone) VALUES("${companyName}", "${website}", "${phone}")`, function (error, results, fields) {
      if (error) {
        reject(error)
      } else {
        resolve(results)
      }
    })
  })
}

const populateAddresses = function(streetAddress, city, state, zipCode, companyName, id) {
  return new Promise(function(resolve, reject) {
    connection.query(`INSERT INTO Addresses (Street_Address, City, USA_State, Zip_Code, RestaurantID) VALUES("${streetAddress}", "${city}", "${state}", ${zipCode}, ${id});`, function(error, results, fields) {
      if (error) {
        reject(error)
      } else {
        resolve(results)
      }
    })
  })
}

const populateStoreHours = function(start, end, companyName, id) {
  return new Promise(function(resolve, reject) {
    connection.query(`INSERT INTO Opening_Times(Start_Hour, End_Hour, RestaurantID) VALUES("${start}", "${end}", "${id}")`, function(error, results, fields) {
      if (error) {
        reject(error)
      } else {
        resolve(results)
      }
    })
  })
}

const populateRatings = function(foodRating, decorRating, serviceRating, writtenReview, companyName, id) {
  return new Promise(function(resolve, reject) {
    connection.query(`INSERT INTO Ratings(food_rating, decor_rating, service_rating, written_review, RestaurantID) VALUES("${foodRating}", "${decorRating}", "${serviceRating}", "${writtenReview}", ${id})`, function(error, results, fields) {
      if (error) {
        reject(error)
      } else {
        resolve(results)
      }
    })
  })
}

module.exports = {
  populateRestaurants,
  populateAddresses,
  populateStoreHours,
  populateRatings
}








