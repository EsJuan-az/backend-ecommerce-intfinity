module.exports = function( { prefix='', routes } , router ){
    for( let { method, path, middlewares, controller } of routes ){
        router[method] (prefix + path, middlewares, controller) 
    }
}