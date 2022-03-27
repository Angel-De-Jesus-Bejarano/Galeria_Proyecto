const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../static/images'));
  },

  filename: function (req, file, cb) {
    cb(null, Date.now()+'-images-'+file.originalname);
  },
});

module.exports = storage;
