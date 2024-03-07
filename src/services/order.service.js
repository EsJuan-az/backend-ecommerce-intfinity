const boom = require('@hapi/boom');
const { models: { Order } } = require('../libs/sequelize');
class OrderService{
    static async findAll( company_id, query, offset, limit ){
        const order = await Order.findAll({
            where: {
                companyId: company_id,
                active: true,
                ...query,
            },
            include:['products', 'customer'],
            offset,
            limit,
        });
        return order;
    }
    static async findOne( company_id, id ){
        const order = await Order.findOne({
            where: {
                id,
                companyId: company_id,
                active: true,
            },
            include:['products', 'customer'],
        });
        if( !order ){
            throw boom.notFound('order not found');
        }
        return order;
    }
    static async create( company_id, data){
        const order = await Order.create( {
            ...data,
            companyId: company_id,
        }, {
            include:['products', 'customer'],
        });
        return order;
    }
    static async update( company_id, id, data ){
        const order = await OrderService.findOne( company_id, id );
        const newOrder = await order.update({
            ...data,
            companyId: company_id,
        }, {
            include:['products', 'customer'],
        });
        return newOrder;
    }
    static async delete( company_id, id ){
        const newOrder = await OrderService.update( company_id, id, { active: false } );
        return newOrder;
    }
}
module.exports = OrderService;