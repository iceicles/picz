const CustomError = require('../errors');
// const path = require('path');
// const fs = require('fs');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

/* this will upload the images to the local server
    note: this increase server code size
*/
// const uploadAlbumImageLocal = async (req, res) => {
//   // not sending json in req.body from client
//   const productImage = req.files.image;

//   // create public/uploads folder if it doesn't exist
//   const publicAssetsFolder = path.join(__dirname, '../public/uploads');
//   let imagePath;
//   try {
//     if (!fs.existsSync(publicAssetsFolder)) {
//       fs.mkdirSync(publicAssetsFolder, { recursive: true });
//     }
//     imagePath = path.join(publicAssetsFolder, productImage.name);
//   } catch (error) {
//     console.log(error);
//   }

//   // check if file exists
//   if (!req.files) {
//     throw new CustomError.BadRequestError('No File Uploaded');
//   }

//   // check format
//   if (!productImage.mimetype.startsWith('image')) {
//     throw new CustomError.BadRequestError('Please Upload an Image');
//   }

//   // check image size
//   const maxSize = 1024 * 1024;
//   if (productImage.size > maxSize) {
//     throw new CustomError.BadRequestError(
//       'Please upload image smaller than 1MB'
//     );
//   }

//   // use 'mv' method provided by fileUpload pkg to move the file to /uploads folder
//   await productImage.mv(imagePath);

//   return res
//     .status(200)
//     .json({ image: { src: `/uploads/${productImage.name}` } });
// };

// set up cloudinary storage using multer-storage-cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'picz', // specify cloudinary folder
    allowedFormats: ['jpeg', 'png', 'jpg'], // allowed formats
  },
});

// initialize multer with cloudinary storage
const parser = multer({ storage: storage });

// controller function for uploading the album image to cloudinary
const uploadAlbumImageCloud = async (req, res, next) => {
  // call multer's `single('file')` middleware
  await parser.single('image')(req, res, (err) => {
    if (err) {
      // if multer reports an error (e.g., unsupported zip file), handle it
      return next(err); // Pass the error to Express's default error handler
    }

    // check if file exists
    if (!req.file) {
      return res.status(400).json({ msg: 'No File Uploaded' });
    }

    // check size (size can be set in .env)
    const maxSize = 1024 * 1024; // 1MB
    if (req.file.size > maxSize) {
      return res
        .status(400)
        .json({ msg: 'Please upload an image smaller than 1MB' });
    }

    // check format
    if (!req.file.mimetype.startsWith('image')) {
      return res.status(400).json({ msg: 'Please upload a valid image' });
    }

    try {
      // file URL available in `req.file.path` after upload to cloudinary
      res.status(200).json({ image: { src: req.file.path } });
    } catch (error) {
      console.error('Error processing the file:', error);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  });
};

module.exports = {
  // uploadAlbumImageLocal,
  uploadAlbumImageCloud,
};
