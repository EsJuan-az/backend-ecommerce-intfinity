const boom = require('@hapi/boom');
const { models: { Refund } } = require('../libs/sequelize');
class RefundService{
    static async findAll( company_id ){
        const refund = await Refund.findAll({
            where: {
                CompanyId: company_id,
                active: true,
            },
            include:['products', 'responsible'],
        });
        return refund;
    }
    static async findOne( company_id, id ){
        const refund = await Refund.findOne({
            where: {
                id,
                CompanyId: company_id,
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
            CompanyId: company_id,
        }, {
            include:['products', 'responsible'],
        });
        return refund;
    }
    static async update( company_id, id, data ){
        const refund = await RefundService.findOne( company_id, id );
        const newRefund = await refund.update({
            ...data,
            CompanyId: company_id,
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