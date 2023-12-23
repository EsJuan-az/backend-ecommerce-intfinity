const OrderService = require('../services/order.service');
module.exports = {
    async findAllOrders( req, res, next ){
        try{
            const {
                params: {
                    company_id
                },
            } = req;
            const order = await OrderService.findAll( company_id );
            return res.status(200)
                        .json({
                            result: order,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async findOneOrder( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id,
                },
            } = req;
            const order = await OrderService.findOne( company_id, id );
            return res.status(200)
                        .json({
                            result: order,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async createOrder( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                },
                body,
            } = req;
            const order = await OrderService.create( company_id, body );
            return res.status(201)
                        .json({
                            result: order,
                            statusCode: 201,
                        });
        }catch(err){
            next(err);
        }
    },
    async updateOrder( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id
                },
                body,
            } = req;
            const newOrder = await OrderService.update( company_id, id, body );
            return res.status(200)
                        .json({
                            result: newOrder,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async deleteOrder( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id,
                },
            } = req;
            const newOrder = await OrderService.delete( company_id, id );
            return res.status(200)
                        .json({
                            result: newOrder,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
}