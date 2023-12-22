function embedRoutes( app ){
    //  Company works different:  {{url}}/api/company/
    const routers = [
        require('./company.route'),
        require(`./user.route`),
    ];  
    routers.forEach( r => app.use('/api/company', r) );
}
module.exports = embedRoutes;