const boom = require('@hapi/boom');
const { models: { Provider, Company } } = require('../libs/sequelize');
class ProviderService{
    static async findAll( company_id ){
        let providers = await Provider.findAll({
            where: {
                CompanyId: company_id,
                active: true,
            },
        });
        
        return providers;
    }
    static async findOne( company_id, id ){
        let provider = await Provider.findOne({
            where: {
                id: id,
                active: true,
                CompanyId: company_id,
            },
        });

        if( !provider ){
            throw boom.notFound('provider not found');
        }

        return provider
    }
    static async create( company_id, data ){
        const provider = await Provider.create( { ...data, CompanyId: company_id } );
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
        const unactiveProviders = await Provider.findAll({
            where:{
                [Op.or]: [
                  { email: provider.email },
                  { phone: provider.phone },  
                ],
                active: false,
                CompanyId: company_id,
            },
        });
        await Promise.all( unactiveProviders.map( (p) => p.destroy() ) );
        //Finally we update 
        const newProvider = await provider.update({ active:false });
        return newProvider;
    }
}
module.exports = ProviderService;