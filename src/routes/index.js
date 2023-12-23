function embedRoutes( app ){
    //  Company base routes
    const routers = [
        require('./company.route'),
        require(`./user.route`),
        require('./product.route'),
        require('./provider.route'),
        require('./order.route'),
        require('./category.route')
    ];  
    routers.forEach( r => app.use('/api/company', r) );
    //Image base routes
    app.use('/api/image', require('./image.route'));
}
module.exports = embedRoutes;