const Sequelize = require('sequelize');
const { sequelize } = require('../database/database');
const images = require('./images');

const USERS = sequelize.define(
  'users',
  {
    id_user: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name_user: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

  USERS.hasMany(images, {foreignKey: 'user_id', sourceKey: 'id_user'})
  images.belongsTo(USERS, {foreignKey: 'user_id', sourceKey: 'id_user'})

module.exports = USERS;
