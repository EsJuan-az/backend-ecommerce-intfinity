const { Sequelize } = require('sequelize');
const { db } = require('../config');
const defineModels = require('../models');
const sequelize = new Sequelize( `postgres://${encodeURIComponent(db.user)}:${encodeURIComponent(db.password)}@${db.host}:${db.port}/${db.name}`, {
    dialect: 'postgres',
    logging: ( sql ) => console.log(sql),
} );

defineModels( sequelize );
sequelize.sync({ alter: true, force: true});

module.exports = sequelize;