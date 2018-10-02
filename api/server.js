const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

const titleRoutes = require('./routes/title.route');

const CONNECTION_URI =
  process.env.MONGODB_URI ||
  'mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge';

mongoose.Promise = global.Promise;
mongoose.set('debug', false);

mongoose
  .connect(
    CONNECTION_URI,
    {
      useNewUrlParser: true
    }
  )
  .then(
    () => {
      console.log('Database is connected'); /* eslint no-console: 0 */
    },
    err => {
      console.log(
        `Cannot connect to the database ${err}`
      ); /* eslint no-console: 0 */
    }
  );

app.use(
  cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  })
);

app.use(bodyParser.json());

app.use('/titles', titleRoutes);

app.listen(port, () =>
  console.log(`Listening on port ${port}`)
); /* eslint no-console: 0 */

module.exports = app;
