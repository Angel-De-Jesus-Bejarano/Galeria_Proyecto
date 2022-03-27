const router = require('express').Router()
const imagesRouter = require('../routes/images.route');
const usersRouter = require('../routes/users.route');


function routerApi(app) {
  app.use('/api/v1', router);
  router.use('/images', imagesRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
