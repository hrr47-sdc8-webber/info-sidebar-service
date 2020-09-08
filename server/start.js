const app = require('./index.js');
const cors = require('cors');

app.use(cors());

const port = 8080;

app.listen(port, () => {
  console.log(`Example app listening at port ${port}`);
});

