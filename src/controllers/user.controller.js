const UserService = require('../services/user.service');
module.exports = {
    async findAllUsers( req, res, next ){
        try{
            const users = await UserService.findAll();
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
                    id,
                },
            } = req;
            const user = await UserService.findOne( id );
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
                body,
            } = req;
            const user = await UserService.create( body );
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
                    id
                },
                body,
            } = req;
            const newUser = await UserService.update( id, body );
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
                    id,
                },
            } = req;
            const newUser = await UserService.delete( id );
            return res.status(200)
                        .json({
                            result: newUser,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async loginUser(req, res, next){
        try{
            const {
                body: {
                    email,
                    password,
                },
            } = req;
            const user = await UserService.login( email, password);
            return res.status(202)
                        .json({
                            result: user,
                            statusCode: 202,
                        });
        }catch(err){
            next(err);
        }
    },
};