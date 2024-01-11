const { Sequelize } = require('sequelize');
const defineModels = require('../models');

const { 
  ENV,
  URI,
} =  require('../config');
const config = require('../database/config');


const sequelize = new Sequelize( URI , ENV == "DEV" ? config['development'] : config['production'] );

defineModels( sequelize );

module.exports = sequelize;