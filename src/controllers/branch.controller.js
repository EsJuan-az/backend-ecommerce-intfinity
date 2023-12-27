const BranchService = require('../services/branch.service');
module.exports = {
    async findAllBranches( req, res, next ){
        try{
            const {
                params: {
                    company_id
                },
            } = req;
            const branches = await BranchService.findAll( company_id );
            return res.status(200)
                        .json({
                            result: branches,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async findOneBranch( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id,
                },
            } = req;
            const branch = await BranchService.findOne( company_id, id );
            return res.status(200)
                        .json({
                            result: branch,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async createBranch( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                },
                body,
            } = req;
            const branch = await BranchService.create( company_id, body );
            return res.status(201)
                        .json({
                            result: branch,
                            statusCode: 201,
                        });
        }catch(err){
            next(err);
        }
    },
    async updateBranch( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id
                },
                body,
            } = req;
            const newBranch = await BranchService.update( company_id, id, body );
            return res.status(200)
                        .json({
                            result: newBranch,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async deleteBranch( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id,
                },
            } = req;
            const newBranch = await BranchService.delete( company_id, id );
            return res.status(200)
                        .json({
                            result: newBranch,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
}