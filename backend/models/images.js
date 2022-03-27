const Sequelize = require('sequelize');
const { sequelize } = require('../database/database');

const IMAGES = sequelize.define(
  'images',
  {
    id_image: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    image_url: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    stars: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    category_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },

    created_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = IMAGES;
