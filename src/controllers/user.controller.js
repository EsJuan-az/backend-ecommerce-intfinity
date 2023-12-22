const UserService = require('../services/user.service');
module.exports = {
    async findAllUsers( req, res, next ){
        try{
            const {
                params
            } = req;
            console.log(params);
            const users = await UserService.findAll( params.company_id );
            return res.status(200)
                        .json({
                            result: users,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async findOneUser( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id,
                },
            } = req;
            const user = await UserService.findOne( company_id, id );
            return res.status(200)
                        .json({
                            result: user,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async createUser( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                },
                body,
            } = req;
            const user = await UserService.create( company_id, body );
            return res.status(201)
                        .json({
                            result: user,
                            statusCode: 201,
                        });
        }catch(err){
            next(err);
        }
    },
    async updateUser( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id
                },
                body,
            } = req;
            const newUser = await UserService.update( company_id, id, body );
            return res.status(200)
                        .json({
                            result: newUser,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async deleteUser( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                    id,
                },
            } = req;
            const newUser = await UserService.delete( company_id, id );
            return res.status(200)
                        .json({
                            result: newUser,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
}