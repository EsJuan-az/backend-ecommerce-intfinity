const { Router } = require('express');
const {
    findAllCompanies,
    findOneCompany,
    createCompany,
    updateCompany,
    deleteCompany,
    loginCompany,
} = require('../controllers/company.controller');
const {
    s_findAllCompanies,
    s_findOneCompany,
    s_createCompany,
    s_updateCompany,
    s_deleteCompany,
    s_loginCompany,
} = require('../schemas/company.schema');
const embedMethods = require('../helpers/embedMethods');
const { validatorHandler, regexGetAllQuery } = require('../middlewares/validation');
const router = Router();

const companyRouter = {
    routes: [
        {
            method: 'get',
            path: '/',
            middlewares: [ validatorHandler(s_findAllCompanies), regexGetAllQuery ],
            controller: findAllCompanies,
        },
        {
            method: 'get',
            path: '/:company_id',
            middlewares: [ validatorHandler(s_findOneCompany) ],
            controller: findOneCompany,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [ validatorHandler(s_createCompany) ],
            controller: createCompany,
        },
        {
            method: 'put',
            path: '/:company_id',
            middlewares: [ validatorHandler(s_updateCompany) ],
            controller: updateCompany,
        },
        {
            method: 'delete',
            path: '/:company_id',
            middlewares: [ validatorHandler(s_deleteCompany) ],
            controller: deleteCompany,
        },
        {
            method: 'post',
            path: '/login',
            middlewares: [ validatorHandler(s_loginCompany) ],
            controller: loginCompany,
        },
    ],
};

embedMethods( companyRouter, router );


module.exports = router;