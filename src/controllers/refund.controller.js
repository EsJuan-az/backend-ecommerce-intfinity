const shortid = require('shortid');
const RefundService = require('../services/refund.service');
module.exports = {
    async findAllRefunds( req, res, next ){
        try{
            const {
                params: {
                    company_id
                },
            } = req;
            const refund = await RefundService.findAll( company_id );
            return res.status(200)
                        .json({
                            result: refund,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async findOneRefund( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id,
                },
            } = req;
            const refund = await RefundService.findOne( company_id, id );
            return res.status(200)
                        .json({
                            result: refund,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async createRefund( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                },
                body,
            } = req;
            const refund = await RefundService.create( company_id, {
                ...body,
                refund_number: shortid.generate(),
            });
            return res.status(201)
                        .json({
                            result: refund,
                            statusCode: 201,
                        });
        }catch(err){
            next(err);
        }
    },
    async updateRefund( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id
                },
                body: { refund_number, ...data },
            } = req;
            
            const newRefund = await RefundService.update( company_id, id, data );
            return res.status(200)
                        .json({
                            result: newRefund,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async deleteRefund( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id,
                },
            } = req;
            const newRefund = await RefundService.delete( company_id, id );
            return res.status(200)
                        .json({
                            result: newRefund,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
}