const boom = require('@hapi/boom');
const { models: { Order } } = require('../libs/sequelize');
class OrderService{
    static async findAll( company_id ){
        const order = await Order.findAll({
            where: {
                CompanyId: company_id,
                active: true,
            },
        });
        return order;
    }
    static async findOne( company_id, id ){
        const order = await Order.findOne({
            where: {
                id,
                CompanyId: company_id,
                active: true,
            },
        });
        if( !order ){
            throw boom.notFound('order not found');
        }
        return order;
    }
    static async create( company_id, data ){
        const order = await Order.create( {
            ...data,
            CompanyId: company_id,
        });
        return order;
    }
    static async update( company_id, id, data ){
        const order = await OrderService.findOne( company_id, id );
        const newOrder = await order.update({
            ...data,
            CompanyId: company_id,
        });
        return newOrder;
    }
    static async delete( company_id, id ){
        const newOrder = await OrderService.update( company_id, id, { active: false } );
        return newOrder;
    }
}
module.exports = OrderService;