const express = require('express');
const db = require('../database/index.js');
const cors = require('cors');
var bodyParser = require('body-parser')


const app = express();

app.use(express.static('dist'));
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());

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

app.post('/:copyId/restaurants/:id', (req, res) => {
  Promise.resolve(db.newRestaurant(req.body.companyName, req.body.website, req.body.streetAddress, req.body.city, req.body.state, req.body.zip, req.body.phone, req.body.writtenReview, req.body.scoreOne, req.body.scoreTwo, req.body.scoreThree, req.body.start, req.body.end, req.body.averagePrice, req.body.singleSentenceDescriptor, req.body.neighborhood, req.body.typeOfFood))
    .then(() => {
      res.end('Listing added');
    })
    .catch((err) => {
      res.end('Error adding listing');
    })
})

app.put('/:copyId/restaurants/:id', (req, res) => {
  Promise.resolve(db.updateRestaurant(req.body.companyName, req.body.website, req.body.streetAddress, req.body.city, req.body.state, req.body.zip, req.body.phone, req.body.writtenReview, req.body.scoreOne, req.body.scoreTwo, req.body.scoreThree, req.body.start, req.body.end, req.body.averagePrice, req.body.singleSentenceDescriptor, req.body.neighborhood, req.body.typeOfFood, req.body.id))
    .then(() => {
      res.end('Listing added');
    })
    .catch((err) => {
      res.end('Error adding listing');
    })
})

app.delete('/:copyId/restaurants/:id', (req, res) => {
  Promise.resolve(db.deleteTestData(req.params.id))
    .then(() => {
      res.end('Listing deleted');
    })
    .catch((err) => {
      res.end('Error deleting listing');
    })
});



module.exports = app;
