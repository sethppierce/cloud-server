'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World! Class 16 live demo')
})

app.listen(PORT, () => console.log('listening on port', PORT))