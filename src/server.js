'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
const foodRouter = require('./routes/food');
const clothesRouter = require('./routes/clothes');
const intServerErr = require('./error-handler/500');
const notFound = require('./error-handler/404');
const logger = require('./middleware/logger');

app.get('/', (req, res) => {
  res.send('homePage');
});

app.use(cors());
app.use(logger);
app.use(express.json());
app.use(`/api/v1/food`, foodRouter);
app.use('/api/v1/clothes', clothesRouter);
app.use('*', notFound);
app.use(intServerErr);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`server works at port ${port}`);
    });
  },
};
