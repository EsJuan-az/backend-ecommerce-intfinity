const boom = require('@hapi/boom');
const { models: { User } } = require('../libs/sequelize');
const { Op } = require('sequelize');

class UserService{
    static async findAll(query, offset, limit){
        const users = await User.findAll({
            where: {
                active: true,
                ...query,
            },
            limit,
            offset,
            include: ['profile', 'role'],
        });
        return users;
    }
    static async findOne( id ){
        const user = await User.findOne({
            where: {
                id,
                active: true,
            },
            include: ['profile', 'role'],
        });
        if( !user ){
            throw boom.notFound('user not found');
        }
        return user;
    }
    static async create( data ){
        const user = await User.create( {
            ...data,
        }, {
            include: ['profile', 'role'],
        });
        return user;
    }
    static async update( id, data ){
        const user = await UserService.findOne( id );
        const newUser = await user.update({
            ...data,
        }, {
            include: ['profile', 'role'],
        });
        return newUser;
    }
    static async delete( id ){
        const user = await UserService.findOne( id );
        //Look if there's another account with the same email and status (won't be used).
        const unactiveUsers = await User.findAll({
            where:{
                [Op.or]: [
                  { email: user.email },
                  { phone: user.phone },  
                ],
                active: false,
            },
        });
        await Promise.all( unactiveUsers.map( (u) => u.destroy() ) );
        //Finally we update 
        const newUser = await user.update({ active: false }, { include: ['profile', 'role'] });
        return newUser;
    }
    static async login( email, password ){
        const user = await User.findOne({
            where: {
                email,
                password,
            },
            include: ['profile', 'role'],
        });
        if( !user ){
            throw boom.forbidden('not valid authentication');
        }
        return user;
    }
}
module.exports = UserService;