const express = require('express');
const app = express();
const port = 3000;
const db = require('../database-mysql/index.js');


app.get('/', (req, res) => {
  res.send('Hello World!')
})

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
    console.log(error)
    res.end('Error occurred during fetch.')
  })
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



