const boom = require('@hapi/boom');
const { models: { Category } } = require('../libs/sequelize');
class CategoryService{
    static async findAll( company_id, query, offset, limit){
        const category = await Category.findAll({
            where: {
                companyId: company_id,
                active: true,
                ...query,
            },
            offset,
            limit,
            include: ['image'], 
        });
        return category;
    }
    static async findOne( company_id, id ){
        const category = await Category.findOne({
            where: {
                id,
                companyId: company_id,
                active: true,
            },
            include: ['image'],
        });
        if( !category ){
            throw boom.notFound('category not found');
        }
        return category;
    }
    static async create( company_id, data ){
        const category = await Category.create( {
            ...data,
            companyId: company_id,
        }, {
            include: ['image'],
        });
        return category;
    }
    static async update( company_id, id, data ){
        const category = await this.findOne( company_id, id );
        const newCategory = await category.update({
            ...data,
            companyId: company_id,
        }, {
            include: ['image'],
        });
        return newCategory;
    }
    static async delete( company_id, id ){
        const newCategory = await this.update( company_id, id, { active: false } );
        return newCategory;
    }
}
module.exports = CategoryService;