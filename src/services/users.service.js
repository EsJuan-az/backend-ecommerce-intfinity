const boom = require('@hapi/boom');
const { models: { User } } = require('../libs/sequelize');
class UserService{
    static #instance;
    static get instance(){
        UserService.#instance = UserService.#instance || new UserService();
        return UserService.#instance;
    }
    async findAll( company_id ){
        const users = await User.findAll({
            where: {
                CompanyId: company_id,
            },
        });
        return users;
    }
    async findOne( company_id, id ){
        const user = await User.findByPk( id , {
            where: {
                CompanyId: company_id,
            },
        });
        if( !user ){
            throw boom.notFound('user not found');
        }
        return user;
    }
    async create( company_id, data ){
        const user = await User.create( {
            CompanyId: company_id,
            ...data,
        });
        return user;
    }
    async update( company_id, id, data ){
        const user = await this.findOne( company_id, id );
        const newUser = await user.update( data );
        return newUser;
    }
    async delete( company_id, id ){
        const newUser = await this.update( company_id, id, { active: false } );
        return newUser;
    }
}
module.exports = UserService.instance;