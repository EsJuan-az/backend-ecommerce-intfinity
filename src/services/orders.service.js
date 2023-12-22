const boom = require('@hapi/boom');
const { models: { Order } } = require('../libs/sequelize');
class OrderService{
    static #instance;
    static get instance(){
        OrderService.#instance = OrderService.#instance || new OrderService();
        return OrderService.#instance;
    }
    async findAll( company_id ){
        const order = await Order.findAll({
            where: {
                CompanyId: company_id,
            },
        });
        return order;
    }
    async findOne( company_id, id ){
        const order = await Order.findByPk( id , {
            where: {
                CompanyId: company_id,
            },
        });
        if( !order ){
            throw boom.notFound('order not found');
        }
        return order;
    }
    async create( company_id, data ){
        const order = await Order.create( {
            CompanyId: company_id,
            ...data,
        });
        return order;
    }
    async update( company_id, id, data ){
        const order = await this.findOne( company_id, id );
        const newOrder = await order.update( data );
        return newOrder;
    }
    async delete( company_id, id ){
        const newOrder = await this.update( company_id, id, { active: false } );
        return newOrder;
    }
}
module.exports = OrderService.instance;