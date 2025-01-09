// handles file size and other Multer errors here
const multerErrorMiddleware = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ msg: err.message });
  }
};

module.exports = multerErrorMiddleware;
