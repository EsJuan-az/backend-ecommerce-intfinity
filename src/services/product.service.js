const boom = require('@hapi/boom');
const { models: { Product, Category } } = require('../libs/sequelize');
class ProductService{
    static async findAll( company_id ){
        const products = await Product.findAll({
            where: {
                CompanyId: company_id,
                active: true,
            },
            include: ['Images', Category],
        });
        return products;
    }
    static async findOne( company_id, id ){
        const product = await Product.findOne({
            where: {
                id,
                CompanyId: company_id,
                active: true,
            },
            include: ['Images', Category],
        });
        if( !product ){
            throw boom.notFound('product not found');
        }
        return product;
    }
    static async create( company_id, data ){
        const product = await Product.create( {
            ...data,
            CompanyId: company_id,
        }, {
            include: ['Images', Category],
        });
        return product;
    }
    static async update( company_id, id, data ){
        const product = await ProductService.findOne( company_id, id );
        const newProduct = await product.update({
            ...data,
            CompanyId: company_id,
        }, {
            include: ['Images', Category],
        });
        return newProduct;
    }
    static async delete( company_id, id ){
        const newProduct = await ProductService.update( company_id, id, { active: false } );
        return newProduct;
    }
}
module.exports = ProductService;