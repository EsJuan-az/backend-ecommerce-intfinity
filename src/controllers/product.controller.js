const ProductService = require('../services/product.service');
module.exports = {
    async findAllProducts( req, res, next ){
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
            const products = await ProductService.findAll( company_id, query, offset, limit );
            return res.status(200)
                        .json({
                            result: products,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async findOneProduct( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id,
                },
            } = req;
            const product = await ProductService.findOne( company_id, id );
            return res.status(200)
                        .json({
                            result: product,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async createProduct( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                },
                body,
            } = req;
            const product = await ProductService.create( company_id, body );
            return res.status(201)
                        .json({
                            result: product,
                            statusCode: 201,
                        });
        }catch(err){
            next(err);
        }
    },
    async updateProduct( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id,
                },
                body,
            } = req;
            const newProduct = await ProductService.update( company_id, id, body );
            return res.status(200)
                        .json({
                            result: newProduct,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async deleteProduct( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id,
                },
            } = req;
            const newProduct = await ProductService.delete( company_id, id );
            return res.status(200)
                        .json({
                            result: newProduct,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
};