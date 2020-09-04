const express = require('express');
const db = require('../database-mongodb/index.js');
const mongoose = require('mongoose');
const cors = require('cors');
var bodyParser = require('body-parser')


const app = express();

app.use(express.static('dist'));
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());

app.get('/restaurants', (req, res) => {
  db.Restaurants.findOne({}, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(data);
    }
  })
});

module.exports = app;
