const boom = require('@hapi/boom');
const { models: { Role } } = require('../libs/sequelize');

class RoleService{
    static async findAll(){
        const roles = await Role.findAll();
        return roles;
    }
    static async findOne( id ){
        const role = await Role.findOne({
            where: {
                id,
            },
        });
        if( !role ){
            throw boom.notFound('role not found');
        }
        return role;
    }
    static async create( data ){
        const role = await Role.create( {
            ...data,
        }, {
        });
        return role;
    }
    static async update( id, data ){
        const role = await RoleService.findOne( id );
        const newRole = await role.update({
            ...data,
        }, {
        });
        return newRole;
    }
    static async delete( id ){
        const role = await RoleService.findOne( id );
        const retRole = role.toJSON();
        await role.destroy();
        return retRole;
    }
}
module.exports = RoleService;