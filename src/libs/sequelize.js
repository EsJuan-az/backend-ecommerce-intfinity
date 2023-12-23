const { Sequelize } = require('sequelize');
const { db } = require('../config');
const defineModels = require('../models');
const {URI} =  db;
console.log( URI );
const sequelize = new Sequelize( URI , {
    dialect: 'postgres',
    logging: ( sql ) => console.log(sql + "\n\n"),
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, // Configuración específica para evitar errores de certificado en desarrollo
        },
    }
});

defineModels( sequelize );
sequelize.sync();

module.exports = sequelize;