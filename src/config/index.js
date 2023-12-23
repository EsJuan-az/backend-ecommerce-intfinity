require('dotenv').config();
module.exports = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    db: {
        URI: process.env.CONNECTION_URI,
        ENV: process.env.ENV
    }
};