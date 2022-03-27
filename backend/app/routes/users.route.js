const route = require('express').Router();
const {
  createUser,
  findUser,
  findOneUser,
  deleteUser,
  updateUser,
} = require('../controllers/users.controller');
const {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
} = require('../../schemas/user.schema');
const validatorHandler = require('../../middlewares/validator_handler');

//routes

//crear un usuario
route.post(
  '/createUser',
  validatorHandler(createUserSchema, 'body'),
  createUser
);

//obtener todos los usuarios
route.get('/', findUser);

//obtener un usuario
route.get('/:id', findOneUser);

//eliminar un usuario
route.delete('/delete/:id', deleteUser);

route.put('/:id', validatorHandler(updateUserSchema, 'body'), updateUser);

module.exports = route;
