const express = require('express');
const cors = require('cors');
const db = require('../database-mysql/index.js');

const app = express();

app.use(express.static('dist'));
app.use(express.static('public'));
app.use(cors());

app.use('/:id', express.static('dist'));

app.get('/:copyId/restaurants/:id', (req, res) => {
  const Promise1 = Promise.resolve(db.fetchBaseInfo(req.params.id));
  const Promise2 = Promise.resolve(db.fetchContactInfo(req.params.id));
  const Promise3 = Promise.resolve(db.fetchOpenHoursInfo(req.params.id));
  const Promise4 = Promise.resolve(db.fetchRatingsInfo(req.params.id));
  Promise.all([Promise1, Promise2, Promise3, Promise4])
    .then((data) => {
      res.send(data);
    })
    .catch(() => {
      res.end('Error occurred during fetch.');
    });
});

module.exports = app;
