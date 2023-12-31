const { Sequelize } = require('sequelize');
const defineModels = require('../models');

const { 
  serverEnv,
  URI
} =  require('../config');


const sequelize = new Sequelize( URI , {
    dialect: 'postgres',
    logging: ( sql ) => console.log(sql + "\n\n"),
    dialectOptions: {
        ssl: serverEnv != "DEV" ? {
          require: true,
          rejectUnauthorized: false, // Configuración específica para evitar errores de certificado en desarrollo
        }
        :
        null,
    }
});

defineModels( sequelize );

module.exports = sequelize;