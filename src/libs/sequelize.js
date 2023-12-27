const { Sequelize } = require('sequelize');
const { db } = require('../config');
const { URI, ENV } =  db;
const defineModels = require('../models');
const sequelize = new Sequelize( URI , {
    dialect: 'postgres',
    logging: ( sql ) => console.log(sql + "\n\n"),
    dialectOptions: {
        ssl: ENV != "DEV" ? {
          require: true,
          rejectUnauthorized: false, // Configuración específica para evitar errores de certificado en desarrollo
        }
        :
        null,
    }
});

defineModels( sequelize );
sequelize.sync({alter: true, force: true});

module.exports = sequelize;