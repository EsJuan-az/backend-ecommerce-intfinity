const boom = require('@hapi/boom');
const { models: { User, Role } } = require('../libs/sequelize');

class UserService{
    static async findAll(){
        const users = await User.findAll({
            where: {
                active: true,
            },
            include: ['ProfilePic', Role]
        });
        return users;
    }
    static async findOne( id ){
        const user = await User.findOne({
            where: {
                id,
                active: true,
            },
            include: ['ProfilePic', Role],
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
            include: ['ProfilePic', Role],
        });
        return user;
    }
    static async update( id, data ){
        const user = await UserService.findOne( id );
        const newUser = await user.update({
            ...data,
        }, {
            include: ['ProfilePic', Role],
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
        const newUser = await user.update({ active: false }, { include: ['ProfilePic', Role] });
        return newUser;
    }
    static async login( email, password ){
        const user = await User.findOne({
            where: {
                email,
                password,
            },
            include: ['ProfilePic', Role],
        })
        if( !user ){
            throw boom.forbidden('not valid authentication');
        }
        return user;
    }
}
module.exports = UserService;