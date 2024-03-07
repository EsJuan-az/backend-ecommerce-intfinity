const boom = require('@hapi/boom');
const { models: { Purchase } } = require('../libs/sequelize');
class PurchaseService{
    static async findAll( company_id, query, offset, limit ){
        const purchase = await Purchase.findAll({
            where: {
                companyId: company_id,
                active: true,
                ...query,
            },
            include:[ 'products', 'responsible' ],
            offset,
            limit,
        });
        return purchase;
    }
    static async findOne( company_id, id ){
        const purchase = await Purchase.findOne({
            where: {
                id,
                companyId: company_id,
                active: true,
            },
            include:[ 'products', 'responsible' ],
        });
        if( !purchase ){
            throw boom.notFound('purchase not found');
        }
        return purchase;
    }
    static async create( company_id, data){
        const purchase = await Purchase.create( {
            ...data,
            companyId: company_id,
        }, {
            include:[ 'products', 'responsible' ],
        });
        return purchase;
    }
    static async update( company_id, id, data ){
        const purchase = await PurchaseService.findOne( company_id, id );
        const newPurchase = await purchase.update({
            ...data,
            companyId: company_id,
        }, {
            include:[ 'products', 'responsible' ],
        });
        return newPurchase;
    }
    static async delete( company_id, id ){
        const newPurchase = await PurchaseService.update( company_id, id, { active: false } );
        return newPurchase;
    }
}
module.exports = PurchaseService;