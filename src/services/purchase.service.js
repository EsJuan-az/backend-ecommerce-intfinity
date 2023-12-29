const boom = require('@hapi/boom');
const { models: { Product, Purchase } } = require('../libs/sequelize');
class PurchaseService{
    static async findAll( company_id ){
        const purchase = await Purchase.findAll({
            where: {
                CompanyId: company_id,
                active: true,
            },
            include:[Product],
        });
        return purchase;
    }
    static async findOne( company_id, id ){
        const purchase = await Purchase.findOne({
            where: {
                id,
                CompanyId: company_id,
                active: true,
            },
            include:[Product]
        });
        if( !purchase ){
            throw boom.notFound('purchase not found');
        }
        return purchase;
    }
    static async create( company_id, data){
        const purchase = await Purchase.create( {
            ...data,
            CompanyId: company_id,
        }, {
            include:[Product]
        });
        return purchase;
    }
    static async update( company_id, id, data ){
        const purchase = await PurchaseService.findOne( company_id, id );
        const newPurchase = await purchase.update({
            ...data,
            CompanyId: company_id,
        }, {
            include:[Product]
        });
        return newPurchase;
    }
    static async delete( company_id, id ){
        const newPurchase = await PurchaseService.update( company_id, id, { active: false } );
        return newPurchase;
    }
}
module.exports = PurchaseService;