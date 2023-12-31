const boom = require("@hapi/boom");

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
        }
    }
}