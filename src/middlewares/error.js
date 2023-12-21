module.exports = {
    //Displays errors in console
    logErrors(err, req, res, next){
        console.log(err);
        next(err);
    },
    //If the error is boom, continue
    boomHandler( err, req, res, next ){
        if( err.isBoom ){
            const {
                output: {
                    statusCode,
                    payload,
                },
            } = err;
            return res.status( statusCode )
                        .json( payload );
        }
        next(err)
    },
    //If the error is orm, continue
    ormHandler( err, req, res, next ){
        if( err instanceof ValidationError ){
            const { name:message, errors } = err;
            return res.status(409)
                        .json({
                            message,
                            errors
                        });
        }
        next(err);
    },
    //Gives a response
    errorHandler(err, req, res, next){
        const {
            message,
            stack
        } = err;
        return res.status(500)
                    .json({
                        message,
                        stack,
                    })
    }
};