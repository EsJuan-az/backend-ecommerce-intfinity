const { URI } = require('../config');

module.exports = {
    development: {
        dialect: 'postgres',
        logging: ( sql ) => console.log(sql + "\n\n"),
    },
    production: {
        dialect: 'postgres',
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false, // Configuración específica para evitar errores de certificado en desarrollo
              },
        },
    },
};