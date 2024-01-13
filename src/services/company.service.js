const boom = require('@hapi/boom');
const { models: { Company } } = require('../libs/sequelize');
const { Op } = require('sequelize');
class CompanyService{
    static async findAll(){
        const company = await Company.findAll({
            where: {
                active: true,
            },
            include: ['logo'],
        });
        return company;
    }
    static async findOne( id ){
        const company = await Company.findOne( {
            where: {
                id,
                active: true,
            },
            include: ['logo'],
        });
        if( !company ){
            throw boom.notFound('company not found');
        }
        return company;
    }
    static async create( data ){
        const company = await Company.create( data, {
            include: ['logo'],
        });
        return company;
    }
    static async update( id, data ){
        const company = await CompanyService.findOne( id );
        const newCompany = await company.update( data, {
            include: ['logo'],
        });
        return newCompany;
    }
    static async delete( id ){
        const company = await CompanyService.findOne( id );
        //Look if there's another account with the same email and status (won't be used).
        const unactiveCompanies = await Company.findAll({
            where:{
                [Op.or]: [
                  { email: company.email },
                  { phone: company.phone },  
                ],
                active: false,
            },
        });
        await Promise.all( unactiveCompanies.map( (p) => p.destroy() ) );
        //Finally we update 
        const newCompany = await company.update({ active:false }, { include: ['logo'] });
        return newCompany;
    }
    static async login( email, password ){
        const company = await Company.findOne({
            where: {
                email,
                password,
            },
            include: ['logo'],
        });
        if( !company ){
            throw boom.forbidden('not valid authentication');
        }
        return company;
    }
}
module.exports = CompanyService;