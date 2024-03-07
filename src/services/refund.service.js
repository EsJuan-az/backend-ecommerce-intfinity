const boom = require('@hapi/boom');
const { models: { Refund } } = require('../libs/sequelize');
class RefundService{
    static async findAll( company_id, query, offset, limit ){
        const refund = await Refund.findAll({
            where: {
                companyId: company_id,
                active: true,
                ...query,
            },
            include:['products', 'responsible'],
            offset,
            limit,
        });
        return refund;
    }
    static async findOne( company_id, id ){
        const refund = await Refund.findOne({
            where: {
                id,
                companyId: company_id,
                active: true,
            },
            include:['products', 'responsible'],
        });
        if( !refund ){
            throw boom.notFound('refund not found');
        }
        return refund;
    }
    static async create( company_id, data){
        const refund = await Refund.create( {
            ...data,
            companyId: company_id,
        }, {
            include:['products', 'responsible'],
        });
        return refund;
    }
    static async update( company_id, id, data ){
        const refund = await RefundService.findOne( company_id, id );
        const newRefund = await refund.update({
            ...data,
            companyId: company_id,
        }, {
            include:['products', 'responsible'],
        });
        return newRefund;
    }
    static async delete( company_id, id ){
        const newRefund = await RefundService.update( company_id, id, { active: false } );
        return newRefund;
    }
}
module.exports = RefundService;