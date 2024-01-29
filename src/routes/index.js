function embedRoutes( app ){
    //  Company API base routes
    const routers = [
        require('./company.route'),
        //Dependen de company
        require('./branch.route'),
        require('./category.route'),
        require('./product.route'),
        require('./provider.route'),
        require('./order.route'),
        require('./customer.route'),
        //Dependen de branch
        require('./purchase.route'),
        require('./refund.route'),
    ];  
    routers.forEach( r => app.use('/api/company', r) );
    //Other API base routes, paralelos a Company.
    app.use('/api/image', require('./image.route'));
    app.use('/api/user', require(`./user.route`));
    app.use('/api/role', require('./role.route'));
}
module.exports = embedRoutes;