const { Router } = require('express');
const {
    findAllCustomers,
    findOneCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    loginCustomer,
} = require('../controllers/customer.controller');
const {
    s_findAllCustomers,
    s_findOneCustomer,
    s_createCustomer,
    s_updateCustomer,
    s_deleteCustomer,
    s_loginCustomer,
} = require('../schemas/customer.schema');
const embedMethods = require('../helpers/embedMethods');
const { validatorHandler, regexGetAllQuery } = require('../middlewares/validation');
const router = Router();

const customerRouter = {
    prefix: '/:company_id/customer',
    routes: [
        {
            method: 'get',
            path: '/',
            middlewares: [validatorHandler( s_findAllCustomers ), regexGetAllQuery],
            controller: findAllCustomers,
        },
        {
            method: 'get',
            path: '/:id',
            middlewares: [validatorHandler( s_findOneCustomer )],
            controller: findOneCustomer,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [validatorHandler( s_createCustomer )],
            controller: createCustomer,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [validatorHandler( s_updateCustomer )],
            controller: updateCustomer,
        },
        {
            method: 'delete',
            path: '/:id',
            middlewares: [validatorHandler( s_deleteCustomer )],
            controller: deleteCustomer,
        },
        {
            method: 'post',
            path: '/login',
            middlewares: [validatorHandler( s_loginCustomer )],
            controller: loginCustomer,
        },
    ],
};

embedMethods( customerRouter, router );

module.exports = router;