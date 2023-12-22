const boom = require('@hapi/boom');
const { models: { Category } } = require('../libs/sequelize');
class CategoryService{
    static #instance;
    static get instance(){
        CategoryService.#instance = CategoryService.#instance || new CategoryService();
        return CategoryService.#instance;
    }
    async findAll( company_id ){
        const category = await Category.findAll({
            where: {
                CompanyId: company_id,
            },
        });
        return category;
    }
    async findOne( company_id, id ){
        const category = await Category.findByPk( id , {
            where: {
                CompanyId: company_id,
            },
        });
        if( !category ){
            throw boom.notFound('order not found');
        }
        return category;
    }
    async create( company_id, data ){
        const category = await Category.create( {
            CompanyId: company_id,
            ...data,
        });
        return category;
    }
    async update( company_id, id, data ){
        const category = await this.findOne( company_id, id );
        const newCategory = await category.update( data );
        return newCategory;
    }
    async delete( company_id, id ){
        const newCategory = await this.update( company_id, id, { active: false } );
        return newCategory;
    }
}
module.exports = CategoryService.instance;