const { query } = require('express');
const RoleService = require('../services/role.service')
module.exports = {
    async findAllRoles(req, res, next){
        try{
            const {
                query: {
                    offset = 0,
                    limit = 10,
                    ...query
                }
            } = req;
            const roles = await RoleService.findAll(query, offset, limit);
            return res.status(200)
                        .json({
                            result: roles,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async findOneRole( req, res, next ){
        try{
            const {
                params: {
                    id,
                },
            } = req;
            const role = await RoleService.findOne( id );
            return res.status(200)
                        .json({
                            result: role,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async createRole( req, res, next ){
        try{
            const { body } = req;
            const newRole = await RoleService.create( body );
            return res.status(201)
                        .json({
                            result: newRole,
                            statusCode: 201,
                        });
        }catch(err){
            next(err);
        }
    },
    async updateRole( req, res, next ){
        try{
            const {
                params: {
                    id,
                },
                body,
            } = req;
            const newRole = await RoleService.update( id, body );
            return res.status(200)
                        .json({
                            result: newRole,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async deleteRole( req, res, next ){
        try{
            const {
                params: {
                    id,
                },
            } = req;
            const newRole = await RoleService.delete( id );
            return res.status(200)
                        .json({
                            result: newRole,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    }
}