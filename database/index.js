const mongoose = require('mongoose');

const url = `mongodb+srv://Henry:henry@cluster0.8a9be.mongodb.net/zagat?retryWrites=true&w=majority`;

mongoose.connect(url, {useNewUrlParser: true, useCreateIndex: true});

const db = mongoose.connection;

db.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const zagatSchema = new mongoose.Schema({
  companyName: String,
  website: String,
  streetAddress: String,
  city: String,
  state: String,
  zip: String,
  phone: String,
  writtenReview: String,
  scoreOne: Number,
  scoreTwo: Number,
  scoreThree: Number,
  start: String,
  end: String,
  averagePrice: Number,
  singleSentenceDescriptor: String,
  neighborhood: String,
  typeOfFood: String
});

const Restaurants = mongoose.model('places', zagatSchema);

////// ADD FUNCTIONALITY (e.g. UPDATE, GET, etc.) /////

module.exports = {
  Restaurants
};