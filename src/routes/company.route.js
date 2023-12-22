const { Router } = require('express');
const {
    findAllCompanies,
    findOneCompany,
    createCompany,
    updateCompany,
    deleteCompany
} = require('../controllers/company.controller');
const embedMethods = require('../helpers/embedMethods');
const router = Router();

const companyRouter = {
    routes: [
        {
            method: 'get',
            path: '/',
            middlewares: [],
            controller: findAllCompanies,
        },
        {
            method: 'get',
            path: '/:company_id',
            middlewares: [],
            controller: findOneCompany,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [],
            controller: createCompany,
        },
        {
            method: 'put',
            path: '/:company_id',
            middlewares: [],
            controller: updateCompany,
        },
        {
            method: 'delete',
            path: '/:company_id',
            middlewares: [],
            controller: deleteCompany,
        }
    ],
}

embedMethods( companyRouter, router );


module.exports = router;