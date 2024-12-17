require('dotenv').config();

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi there');
});

const port = process.env.port || 4000;

app.listen(port, () => console.log(`Server is listening on ${port}...`));
