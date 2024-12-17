require('dotenv').config();

const express = require('express');

const app = express();

// database
const connectDB = require('./db/connect');

// parsing json from req.body
app.use(express.json());

// album router
const albumRouter = require('./routes/albumRoutes');
app.use('/api/v1/albums', albumRouter);

app.get('/', (req, res) => {
  res.send('<h1>Picz server</h1>');
});

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server is listening on ${port}...`));
    await connectDB(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};

start();
