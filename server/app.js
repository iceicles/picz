require('express-async-errors');
require('dotenv').config();

const express = require('express');

const app = express();

const fileUpload = require('express-fileupload');

// database
const connectDB = require('./db/connect');

/* cors */
const cors = require('cors');
const corsOptions = {
  origin: process.env.CLIENT_URL, // frontend url
};
app.use(cors(corsOptions));

// parsing json from req.body
app.use(express.json());

// access static assets
app.use(express.static('./public'));

// for uploading files to server then later cloud (cloudinary)
app.use(fileUpload());

// album router
const albumRouter = require('./routes/albumRoutes');
app.use('/api/v1/albums', albumRouter);

// error handlers
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.get('/', (req, res) => {
  res.send('<h1>Picz server</h1>');
});

// middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

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

// used by vercel during deployment
module.exports = app;
