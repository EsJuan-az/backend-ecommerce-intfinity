const { URI } = require('../config');

module.exports = {
    development: {
        url: URI,
        dialect: 'postgres',
        logging: ( sql ) => console.log(sql + "\n\n"),
    },
    production: {
        url: URI,
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