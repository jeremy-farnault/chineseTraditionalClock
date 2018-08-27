'use strict';

const clock = require('./chineseClock');
const bodyParser = require('body-parser');

const express = require('express');

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.post('/', (req, res) => {
  console.log('BODY --- ', req.body)
  res.status(200).send(clock(req.body.text));
});

if (module === require.main) {
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
}

module.exports = app;
