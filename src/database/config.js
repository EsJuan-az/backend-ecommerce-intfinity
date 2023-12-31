const { URI } = require('../config');

module.exports = {
    development: {
        url: URI,
        dialect: 'postgres',
    },
    production: {
        url: URI,
        dialect: 'postgres',
    }
}