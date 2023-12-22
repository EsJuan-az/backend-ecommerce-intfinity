const boom = require('@hapi/boom');
const { models: { Provider } } = require('../libs/sequelize');
class ProviderService{
    static async findAll( company_id ){
        const provider = await Provider.findAll({
            where: {
                CompanyId: company_id,
                active: true,
            },
        });
        return provider;
    }
    static async findOne( company_id, id ){
        const provider = await Provider.findOne({
            where: {
                id,
                CompanyId: company_id,
                active: true,
            },
        });
        if( !provider ){
            throw boom.notFound('provider not found');
        }
        return provider;
    }
    static async create( company_id, data ){
        const provider = await Provider.create( {
            CompanyId: company_id,
            ...data,
        });
        return provider;
    }
    static async update( company_id, id, data ){
        const provider = await ProviderService.findOne( company_id, id );
        const newProvider = await provider.update({
            ...data,
            CompanyId: company_id,
        });
        return newProvider;
    }
    static async delete( company_id, id ){
        const provider = await ProviderService.findOne( company_id, id );
        //Look if there's another account with the same email and status (won't be used).
        const unactiveProvider = await Provider.findOne({
            where:{
                email: provider.email,
                active: false,
            },
        });
        if( !!unactiveProvider ) await unactiveProvider.destroy();
        //Finally we update 
        const newProvider = await provider.update({ active:false });
        return newProvider;
    }
}
module.exports = ProviderService.instance;