const route = require('express').Router();
const {
  uploadImage,
  getImages,
  getOneImages,
  getImagesByUser,
  deleteImage,
  getImageByCategory,
} = require('../controllers/images.controller');
const storage = require('../../middlewares/multer');
const multer = require('multer');
const uploader = multer({ storage });

route.get('/', getImages);

route.get('/:id', getOneImages);

route.get('/users/:user_id', getImagesByUser);

route.get('/categories/:category_id', getImageByCategory);

route.post('/upload', uploader.single('image_url'), uploadImage);

route.delete('/deleteImage/:id', deleteImage);

module.exports = route;
