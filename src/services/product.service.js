const boom = require('@hapi/boom');
const { models: { Product } } = require('../libs/sequelize');
class ProductService{
    static async findAll( company_id ){
        const products = await Product.findAll({
            where: {
                CompanyId: company_id,
                active: true,
            },
            include: ['Images'],
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
            include: ['Images'],
        });
        if( !product ){
            throw boom.notFound('product not found');
        }
        return product;
    }
    static async create( company_id, data ){
        const product = await Product.create( {
            CompanyId: company_id,
            ...data,
        }, {
            include: ['Images'],
        });
        return product;
    }
    static async update( company_id, id, data ){
        const product = await ProductService.findOne( company_id, id );
        const newProduct = await product.update({
            ...data,
            CompanyId: company_id,
        }, {
            include: ['Images'],
        });
        return newProduct;
    }
    static async delete( company_id, id ){
        const newProduct = await ProductService.update( company_id, id, { active: false } );
        return newProduct;
    }
}
module.exports = ProductService;