const express = require('express');
const db = require('../database-mysql/index.js');

const app = express();
const port = 3000;

app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/restaurants/:id', (req, res) => {
  const Promise1 = Promise.resolve(db.fetchBaseInfo(req.params.id));
  const Promise2 = Promise.resolve(db.fetchContactInfo(req.params.id));
  const Promise3 = Promise.resolve(db.fetchOpenHoursInfo(req.params.id));
  const Promise4 = Promise.resolve(db.fetchRatingsInfo(req.params.id));
  Promise.all([Promise1, Promise2, Promise3, Promise4])
    .then((data) => {
      res.send(data)
    })
    .catch((error) => {
      console.log(error);
      res.end('Error occurred during fetch.');
    });
});

module.exports = app
