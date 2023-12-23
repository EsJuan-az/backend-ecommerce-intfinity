const CompanyService = require('../services/company.service')
module.exports = {
    async findAllCompanies(req, res, next){
        try{
            const companies = await CompanyService.findAll();
            return res.status(200)
                        .json({
                            result: companies,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async findOneCompany( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                },
            } = req;
            const company = await CompanyService.findOne( company_id );
            return res.status(200)
                        .json({
                            result: company,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async createCompany( req, res, next ){
        try{
            const { body } = req;
            const newCompany = await CompanyService.create( body );
            return res.status(201)
                        .json({
                            result: newCompany,
                            statusCode: 201,
                        });
        }catch(err){
            next(err);
        }
    },
    async updateCompany( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                },
                body,
            } = req;
            const newCompany = await CompanyService.update( company_id, body );
            return res.status(200)
                        .json({
                            result: newCompany,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async deleteCompany( req, res, next ){
        try{
            const {
                params: {
                    company_id,
                },
            } = req;
            const newCompany = await CompanyService.delete( company_id );
            return res.status(200)
                        .json({
                            result: newCompany,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async loginCompany(req, res, next){
        try{
            const {
                body: {
                    email,
                    password,
                }
            } = req;
            const company = await CompanyService.login(email, password);
            return res.status(202)
                        .json({
                            result: company,
                            statusCode: 202,
                        });
        }catch(err){
            next(err)
        }
    }
}