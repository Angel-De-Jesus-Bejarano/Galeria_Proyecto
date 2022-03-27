const Sequelize = require('sequelize');
const { sequelize } = require('../database/database');
const images = require('./images');

const CATEGORIES = sequelize.define('categories', {
  id_category: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  type_category: {
    type: Sequelize.STRING,
    allowNull: false
  }
},
{
  timestamps: false,
});

CATEGORIES.hasMany(images, {foreignKey: 'category_id', sourceKey: 'id_category'})
images.belongsTo(CATEGORIES, {foreignKey: 'category_id', sourceKey: 'id_category'})
