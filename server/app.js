require('dotenv').config();

const express = require('express');

const app = express();

const fileUpload = require('express-fileupload');

// database
const connectDB = require('./db/connect');

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:5173', // frontend url
};
// cors
app.use(cors(corsOptions));

// parsing json from req.body
app.use(express.json());

// for uploading files to server then later cloud (cloudinary)
app.use(fileUpload());

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
