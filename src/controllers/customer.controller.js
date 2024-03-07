const CustomerService = require('../services/customer.service');
module.exports = {
    async findAllCustomers( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                },
                query: {
                    offset = 0,
                    limit = 10,
                    ...query
                },
            } = req;
            const customer = await CustomerService.findAll( company_id, query, offset, limit );
            return res.status(200)
                        .json({
                            result: customer,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async findOneCustomer( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id,
                },
            } = req;
            const customer = await CustomerService.findOne( company_id, id );
            return res.status(200)
                        .json({
                            result: customer,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async createCustomer( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                },
                body,
            } = req;
            const customer = await CustomerService.create( company_id, body );
            return res.status(201)
                        .json({
                            result: customer,
                            statusCode: 201,
                        });
        }catch(err){
            next(err);
        }
    },
    async updateCustomer( req, res, next ){
        try{
            const {
                params: {
                    id,
                    company_id,
                },
                body,
            } = req;
            const newCustomer = await CustomerService.update( company_id, id, body );
            return res.status(200)
                        .json({
                            result: newCustomer,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async deleteCustomer( req, res, next ){
        try{
            const {
                params: {
                    id,
                    company_id,
                },
            } = req;
            const newCustomer = await CustomerService.delete( company_id, id );
            return res.status(200)
                        .json({
                            result: newCustomer,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async loginCustomer(req, res, next){
        try{
            const {
                params: {
                    company_id,
                },
                body: {
                    email,
                    password,
                }
            } = req;
            const customer = await CustomerService.login( company_id, email, password);
            return res.status(202)
                        .json({
                            result: customer,
                            statusCode: 202,
                        });
        }catch(err){
            next(err)
        }
    }
}