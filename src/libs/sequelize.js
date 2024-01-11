const { Sequelize } = require('sequelize');
const defineModels = require('../models');

const { 
  serverEnv,
  URI,
} =  require('../config');
const config = require('../database/config');


const sequelize = new Sequelize( URI , serverEnv == "DEV" ? config['development'] : config['production'] );

defineModels( sequelize );

module.exports = sequelize;