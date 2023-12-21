const errorMiddlewares = require('./error');
module.exports = {
    embedErrorMiddlewares(app){
        //Here we use every error middleware in the object
        for(let middleware of Object.keys( errorMiddlewares ) ){
            app.use( errorMiddlewares[ middleware ] );
        }
    },
};