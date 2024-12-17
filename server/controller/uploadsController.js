const CustomError = require('../errors');
const path = require('path');

/* this will upload the images to the local server
    note: this increase server code size
*/
const uploadAlbumImageLocal = async (req, res) => {
  // check if file exists
  if (!req.files) {
    throw new CustomError.BadRequestError('No File Uploaded');
  }

  const productImage = req.files.image;

  console.log('productImage - ', productImage);

  // check format
  if (!productImage.mimetype.startsWith('image')) {
    throw new CustomError.BadRequestError('Please Upload an Image');
  }

  // check image size
  const maxSize = 1024 * 1024;
  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError(
      'Please upload image smaller than 1MB'
    );
  }

  const imagePath = path.join(
    __dirname,
    '../public/uploads/' + `${productImage.name}`
  );

  // use 'mv' method provided by fileUpload pkg to move the file to /uploads folder
  await productImage.mv(imagePath);

  return res
    .status(200)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

module.exports = { uploadAlbumImageLocal };
