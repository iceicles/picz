// const CustomError = require('../errors');
// const path = require('path');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

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

/* This function uploads images to cloudinary */
const uploadAlbumImageCloud = async (req, res) => {
  // check if file exists
  if (!req.files) {
    throw new CustomError.BadRequestError('No File Uploaded');
  }

  // check image size
  const productImage = req.files.image;
  const maxSize = 1024 * 1024;
  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError(
      'Please upload image smaller than 1MB'
    );
  }

  // upload an image
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: 'picz',
    }
  );

  // removing temp image file once we've successfully uploaded to cloudinary so we don't store them locally (in server) in /tmp folder
  fs.unlinkSync(req.files.image.tempFilePath);

  return res.status(200).json({ image: { src: result.secure_url } });
};

module.exports = {
  // uploadAlbumImageLocal,
  uploadAlbumImageCloud,
};
