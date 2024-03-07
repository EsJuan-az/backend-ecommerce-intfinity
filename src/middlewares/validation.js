const boom = require("@hapi/boom");
const { Op } = require("sequelize");

module.exports = {
    validatorHandler( schemas ){
        return function(req, res, next){
            Object.keys( schemas ).forEach( field => {
                const schema = schemas[field];
                const object = req[field];
                const { error } = schema.validate( object );
                if( error ) next( boom.badRequest( error ) );
            });
            next();
        };
    },
    regexGetAllQuery(req, res, next){
        const ignoreSet = ['offset', 'limit'];
        Object.keys(req.query).forEach((key) => {
            const val = req.query[key];
            if( ignoreSet.includes(key) || !isNaN(val)) return;
            req.query[key] = {
                [Op.iRegexp]: val,
            };
        });
        next();
    },
};