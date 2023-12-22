const boom = require('@hapi/boom');
const { models: { Company } } = require('../libs/sequelize');
class CompanyService{
    static async findAll(){
        const company = await Company.findAll({
            where: {
                active: true
            },
            include: ['Logo']
        });
        return company;
    }
    static async findOne( id ){
        const company = await Company.findOne( {
            where: {
                id,
                active: true
            },
            include: ['Logo']
        });
        if( !company ){
            throw boom.notFound('company not found');
        }
        return company;
    }
    static async create( data ){
        const company = await Company.create( data );
        return company;
    }
    static async update( id, data ){
        const company = await CompanyService.findOne( id );
        const newCompany = await company.update( data );
        return newCompany;
    }
    static async delete( id ){
        const company = await CompanyService.findOne( id );
        //Look if there's another account with the same email and status (won't be used).
        const unactiveCompany = await Company.findOne({
            where:{
                email: company.email,
                active: false,
            },
        });
        if( !!unactiveCompany ) await unactiveCompany.destroy();
        //Finally we update 
        const newCompany = await company.update({ active:false });
        return newCompany;
    }
}
module.exports = CompanyService;