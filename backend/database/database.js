const { Sequelize } = require('sequelize');
const config = require('./config');

const DB_NAME = config.db_name;
const DB_USER = encodeURIComponent(config.db_user);
const DB_PASSWORD = encodeURIComponent(config.db_password);
const DB_HOST = config.db_host;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {

  host: DB_HOST,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  },
  logging: true
});

module.exports = {sequelize};
