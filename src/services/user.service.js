const boom = require('@hapi/boom');
const { models: { User } } = require('../libs/sequelize');

class UserService{
    static async findAll( company_id ){
        const users = await User.findAll({
            where: {
                CompanyId: company_id,
                active: true,
            },
            include: ['ProfilePic']
        });
        return users;
    }
    static async findOne( company_id, id ){
        const user = await User.findOne({
            where: {
                id,
                CompanyId: company_id,
                active: true,
            },
            include: ['ProfilePic']
        });
        if( !user ){
            throw boom.notFound('user not found');
        }
        return user;
    }
    static async create( company_id, data ){
        const user = await User.create( {
            CompanyId: company_id,
            ...data,
        });
        return user;
    }
    static async update( company_id, id, data ){
        const user = await UserService.findOne( company_id, id );
        const newUser = await user.update({
            ...data,
            CompanyId: company_id,
        });
        return newUser;
    }
    static async delete( company_id, id ){
        const user = await UserService.findOne( company_id, id );
        //Look if there's another account with the same email and status (won't be used).
        const unactiveUser = await User.findOne({
            where:{
                email: user.email,
                active: false,
                CompanyId: company_id,
            },
        });
        if( !!unactiveUser ) await unactiveUser.destroy();
        //Finally we update 
        const newUser = await user.update({ active: false });
        return newUser;
    }
}
module.exports = UserService;