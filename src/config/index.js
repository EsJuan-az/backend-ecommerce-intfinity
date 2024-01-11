require('dotenv').config();
const config = {
    ENV: process.env.ENV,
    URI: process.env.CONNECTION_URI,
};
module.exports = config;