const mysql = require('mysql');
const mySqlConfig = require('./config.js');

const connection = mysql.createConnection(mySqlConfig);

const fetchBaseInfo = function(id) {
  return new Promise(function(resolve, reject) {
    connection.query(`SELECT * from Restaurants where Restaurant_ID=${id}`, function(error, results, fields) {
      if (error) {
        console.log(error)
        reject(error)
      } else {
        resolve(results)
      }
    })
  })
};

const fetchContactInfo = function(id) {
  return new Promise(function(resolve, reject) {
    connection.query(`SELECT Street_Address, City, USA_State, Zip_Code FROM Addresses where RestaurantID=${id};`, function(error, results, fields) {
      if (error) {
        reject(error)
      } else {
        resolve(results)
      }
    })
  })
};

const fetchOpenHoursInfo = (id) =>  new Promise((resolve, reject) => connection.query(`SELECT Start_Hour, End_Hour FROM Opening_Times where RestaurantID=${id}`, (error, results) => {
  if (error) {
    reject(error);
  } else {
    resolve(results);
  }
}));

const fetchRatingsInfo = function(id) {
  return new Promise((resolve, reject) => connection.query(`SELECT * FROM Ratings where RestaurantID=${id}`, (error, results) => {
    if (error) {
      reject(error);
    } else {
      resolve(results);
    }
  }));
};

const populateRestaurants = function(companyName, website, phone) {
  return new Promise(function (resolve, reject) {
    connection.query(`INSERT INTO Restaurants (Restaurant_Name, Website, Telephone) VALUES("${companyName}", "${website}", "${phone}")`, function (error, results, fields) {
      if (error) {
        console.log(error)
        reject(error)
      } else {
        resolve(results)
      }
    })
  })
};

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

const populateRatings = (foodRating, decorRating, serviceRating, writtenReview,
  companyName, averagePrice, singleSentenceDescriptor,
  neighborhood, typeOfFood, id) => new Promise((resolve, reject) => {
  connection.query(
    `INSERT INTO Ratings (
        food_rating, decor_rating, service_rating,
        written_review, average_price, singleSentenceDescriptor,
        neighborhood, typeOfFood, RestaurantID)
        VALUES("${foodRating}", "${decorRating}", "${serviceRating}",
        "${writtenReview}", "${averagePrice}", "${singleSentenceDescriptor}",
        "${neighborhood}", "${typeOfFood}", ${id})`,
    (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    },
  );
});

module.exports = {
  populateRestaurants,
  populateAddresses,
  populateStoreHours,
  populateRatings,
  fetchContactInfo,
  fetchBaseInfo,
  fetchOpenHoursInfo,
  fetchRatingsInfo,
};
