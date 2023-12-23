const CategoryService = require('../services/category.service');
module.exports = {
    async findAllCategories( req, res, next ){
        try{
            const {
                params: {
                    company_id
                },
            } = req;
            const category = await CategoryService.findAll( company_id );
            return res.status(200)
                        .json({
                            result: category,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async findOneCategory( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id,
                },
            } = req;
            const category = await CategoryService.findOne( company_id, id );
            return res.status(200)
                        .json({
                            result: category,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async createCategory( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                },
                body,
            } = req;
            const category = await CategoryService.create( company_id, body );
            return res.status(201)
                        .json({
                            result: category,
                            statusCode: 201,
                        });
        }catch(err){
            next(err);
        }
    },
    async updateCategory( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id
                },
                body,
            } = req;
            const newCategory = await CategoryService.update( company_id, id, body );
            return res.status(200)
                        .json({
                            result: newCategory,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async deleteCategory( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id,
                },
            } = req;
            const newCategory = await CategoryService.delete( company_id, id );
            return res.status(200)
                        .json({
                            result: newCategory,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
}