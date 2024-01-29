const boom = require('@hapi/boom');
const { models: { Customer } } = require('../libs/sequelize');
const { Op } = require('sequelize');
class CustomerService{
    static async findAll( company_id ){
        const customers = await Customer.findAll({
            where: {
                active: true,
                companyId: company_id,
            },
        });
        return customers;
    }
    static async findOne( company_id, id ){
        const customer = await Customer.findOne({
            where: {
                id,
                active: true,
                companyId: company_id,
            },
        });
        if( !customer ){
            throw boom.notFound('customer not found');
        }
        return customer;
    }
    static async create( company_id, data ){
        const customer = await Customer.create( {
            ...data,
            companyId: company_id,
        });
        return customer;
    }
    static async update( company_id, id, data ){
        const customer = await CustomerService.findOne( company_id, id );
        const newCustomer = await customer.update({
            ...data,
            companyId: company_id,
        });
        return newCustomer;
    }
    static async delete( company_id, id ){
        const customer = await CustomerService.findOne( company_id, id );
        //Look if there's another account with the same email and status (won't be used).
        const unactiveCustomers = await Customer.findAll({
            where:{
                [Op.or]: [
                  { email: customer.email },
                  { phone: customer.phone },  
                ],
                active: false,
                companyId: company_id,
            },
        });
        await Promise.all( unactiveCustomers.map( (u) => u.destroy() ) );
        //Finally we update 
        const newCustomer = await customer.update({ active: false });
        return newCustomer;
    }
    static async login( company_id, email, password ){
        const user = await Customer.findOne({
            where: {
                companyId: company_id,
                email,
                password,
            },
        });
        if( !user ){
            throw boom.forbidden('not valid authentication');
        }
        return user;
    }
}
module.exports = CustomerService;