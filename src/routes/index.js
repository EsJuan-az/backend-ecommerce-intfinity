function embedRoutes( app ){
    //  Company API base routes
    const routers = [
        require('./company.route'),
        require('./product.route'),
        require('./provider.route'),
        require('./order.route'),
        require('./category.route'),
        require('./customer.route'),
        require('./branch.route')
    ];  
    routers.forEach( r => app.use('/api/company', r) );
    //Other API base routes
    app.use('/api/image', require('./image.route'));
    app.use('/api/user', require(`./user.route`));
    app.use('/api/role', require('./role.route'));
}
module.exports = embedRoutes;