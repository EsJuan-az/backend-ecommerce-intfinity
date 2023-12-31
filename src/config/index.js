require('dotenv').config();
const config = {
    env: process.env.NODE_ENV || 'dev',
    serverEnv: process.env.ENV || 'DEV',
    port: process.env.PORT || 3000,
    dbName: process.env.PGDATABASE,
    dbHost: process.env.PGHOST || 'localhost',
    dbPort: process.env.PGPORT || '5432',
    dbUser: process.env.PGUSER,
    dbPassword: process.env.PGPASSWORD,
};
config.URI = `postgres:${encodeURIComponent( config.dbUser )}:${encodeURIComponent( config.dbPassword )}@${ config.dbHost }:${ config.dbPort }/${ config.dbName }`;
module.exports = config;