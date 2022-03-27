const Joi = require('joi');

const id = Joi.string().uuid();
const name_user = Joi.string().min(3).max(15);
const age = Joi.number()
const email = Joi.string().min(3).max(50);
const password = Joi.string().min(3).max(15);

const createUserSchema = Joi.object({
  name_user: name_user.required(),
  age: age.required(),
  email: email.required(),
  password: password.required()
});

const updateUserSchema = Joi.object({
  name_user: name_user,
  age: age,
  email: email,
  password: password
});

const getUserSchema = Joi.object({
  id_user: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
