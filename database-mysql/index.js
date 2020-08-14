const mysql = require('mysql');
const mySqlConfig = require('./config.js');

const connection = mysql.createConnection(mySqlConfig);

const fetchBaseInfo = (id) => new Promise((resolve, reject) => {
  connection.query(`SELECT * from Restaurants where Restaurant_ID=${id}`, (error, results) => {
    if (error) {
      reject(error);
    } else {
      resolve(results);
    }
  });
});

const fetchContactInfo = (id) => new Promise((resolve, reject) => {
  connection.query(`SELECT Street_Address, City, USA_State, Zip_Code FROM Addresses where RestaurantID=${id};`, (error, results) => {
    if (error) {
      reject(error);
    } else {
      resolve(results);
    }
  });
});

const fetchOpenHoursInfo = (id) => new Promise((resolve, reject) => connection.query(`SELECT Start_Hour, End_Hour FROM Opening_Times where RestaurantID=${id}`, (error, results) => {
  if (error) {
    reject(error);
  } else {
    resolve(results);
  }
}));

const fetchRatingsInfo = (id) => new Promise((resolve, reject) => connection.query(`SELECT * FROM Ratings where RestaurantID=${id}`, (error, results) => {
  if (error) {
    reject(error);
  } else {
    resolve(results);
  }
}));

const populateRestaurants = (companyName, website, phone) => new Promise( (resolve, reject) => {
  connection.query(`INSERT INTO Restaurants (Restaurant_Name, Website, Telephone) VALUES("${companyName}", "${website}", "${phone}")`, (error, results) => {
    if (error) {
      reject(error);
    } else {
      resolve(results);
    }
  });
});

const populateRestaurantsWithID = (companyN, website, phone) => new Promise((resolve, reject) => {
  connection.query(`INSERT INTO Restaurants (Restaurant_ID, Restaurant_Name, Website, Telephone) VALUES(0, "${companyN}", "${website}", "${phone}")`, (error, results) => {
    if (error) {
      reject(error);
    } else {
      resolve(results);
    }
  });
});

const populateAddresses = (strAdr, cit, state, zip, name, id) => new Promise((resolve, reject) => {
  connection.query(`INSERT INTO Addresses (Street_Address, City, USA_State, Zip_Code, RestaurantID) VALUES("${strAdr}", "${cit}", "${state}", ${zip}, ${id});`, (error, results) => {
    if (error) {
      reject(error);
    } else {
      resolve(results);
    }
  });
});

const populateStoreHours = (start, end, companyName, id) => new Promise((resolve, reject) => {
  connection.query(`INSERT INTO Opening_Times(Start_Hour, End_Hour, RestaurantID) VALUES("${start}", "${end}", "${id}")`, (error, results) => {
    if (error) {
      reject(error);
    } else {
      resolve(results);
    }
  });
});

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
//shift this into promises
const deleteTestData = () => new Promise((resolve, reject) => {
  connection.query('delete * from Restaurants, Addresses, Ratings, Opening_Times where Restaurant_ID=?0', (error, results) => {
    if (error) {
      reject(error);
    } else {
      resolve(results);
    }
  });
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
  populateRestaurantsWithID,
  deleteTestData,
};
