'use strict';

const clock = require('./chineseClock');

const express = require('express');

const app = express();

app.post('/', (req, res) => {
  console.log(req.originalUrl); // '/admin/new'
  console.log(req.baseUrl); // '/admin'
  console.log(req.path); // '/new'
  res.status(200).send(clock(req.query.text));
});

if (module === require.main) {
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
}

module.exports = app;
