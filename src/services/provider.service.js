const boom = require('@hapi/boom');
const { models: { Provider } } = require('../libs/sequelize');
class ProviderService{
    static #instance;
    static get instance(){
        ProviderService.#instance = ProviderService.#instance || new ProviderService();
        return ProviderService.#instance;
    }
    async findAll( company_id ){
        const provider = await Provider.findAll({
            where: {
                CompanyId: company_id,
            },
        });
        return provider;
    }
    async findOne( company_id, id ){
        const provider = await Provider.findByPk( id , {
            where: {
                CompanyId: company_id,
            },
        });
        if( !provider ){
            throw boom.notFound('order not found');
        }
        return provider;
    }
    async create( company_id, data ){
        const provider = await Provider.create( {
            CompanyId: company_id,
            ...data,
        });
        return provider;
    }
    async update( company_id, id, data ){
        const provider = await this.findOne( company_id, id );
        const newProvider = await provider.update( data );
        return newProvider;
    }
    async delete( company_id, id ){
        const newProvider = await this.update( company_id, id, { active: false } );
        return newProvider;
    }
}
module.exports = ProviderService.instance;