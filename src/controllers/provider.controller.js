const ProviderService = require('../services/provider.service');
module.exports = {
    async findAllProviders( req, res, next ){
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
            const provider = await ProviderService.findAll( company_id, query, offset, limit );
            return res.status(200)
                        .json({
                            result: provider,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async findOneProvider( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id,
                },
            } = req;
            const provider = await ProviderService.findOne( company_id, id );
            return res.status(200)
                        .json({
                            result: provider,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async createProvider( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                },
                body,
            } = req;
            const provider = await ProviderService.create( company_id, body );
            return res.status(201)
                        .json({
                            result: provider,
                            statusCode: 201,
                        });
        }catch(err){
            next(err);
        }
    },
    async updateProvider( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id
                },
                body,
            } = req;
            const newProvider = await ProviderService.update( company_id, id, body );
            return res.status(200)
                        .json({
                            result: newProvider,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async deleteProvider( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id,
                },
            } = req;
            const newProvider = await ProviderService.delete( company_id, id );
            return res.status(200)
                        .json({
                            result: newProvider,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
}