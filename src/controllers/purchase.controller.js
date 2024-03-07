const shortid = require('shortid');
const PurchaseService = require('../services/purchase.service');
module.exports = {
    async findAllPurchases( req, res, next ){
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
            const purchases = await PurchaseService.findAll( company_id, query, offset, limit );
            return res.status(200)
                        .json({
                            result: purchases,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async findOnePurchase( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id,
                },
            } = req;
            const purchase = await PurchaseService.findOne( company_id, id );
            return res.status(200)
                        .json({
                            result: purchase,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async createPurchase( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                },
                body,
            } = req;
            const purchase = await PurchaseService.create( company_id, {
                ...body,
                invoice_number: shortid.generate(),
            });
            return res.status(201)
                        .json({
                            result: purchase,
                            statusCode: 201,
                        });
        }catch(err){
            next(err);
        }
    },
    async updatePurchase( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id
                },
                body: { invoice_number, ...data },
            } = req;
            
            const newPurchase = await PurchaseService.update( company_id, id, data );
            return res.status(200)
                        .json({
                            result: newPurchase,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async deletePurchase( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id,
                },
            } = req;
            const newPurchase = await PurchaseService.delete( company_id, id );
            return res.status(200)
                        .json({
                            result: newPurchase,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
}