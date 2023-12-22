const boom = require('@hapi/boom');
const { models: { Product } } = require('../libs/sequelize');
class ProductService{
    static #instance;
    static get instance(){
        ProductService.#instance = ProductService.#instance || new ProductService();
        return ProductService.#instance;
    }
    async findAll( company_id ){
        const products = await Product.findAll({
            where: {
                CompanyId: company_id,
            },
        });
        return products;
    }
    async findOne( company_id, id ){
        const product = await Product.findByPk( id , {
            where: {
                CompanyId: company_id,
            },
        });
        if( !product ){
            throw boom.notFound('product not found');
        }
        return product;
    }
    async create( company_id, data ){
        const product = await Product.create( {
            CompanyId: company_id,
            ...data,
        });
        return product;
    }
    async update( company_id, id, data ){
        const product = await this.findOne( company_id, id );
        const newProduct = await product.update( data );
        return newProduct;
    }
    async delete( company_id, id ){
        const newProduct = await this.update( company_id, id, { active: false } );
        return newProduct;
    }
}
module.exports = ProductService.instance;