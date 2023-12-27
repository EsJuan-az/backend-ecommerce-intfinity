const { Router } = require('express');
const {
    findAllCustomers,
    findOneCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    loginCustomer,
} = require('../controllers/customer.controller');
const embedMethods = require('../helpers/embedMethods');
const router = Router();

const customerRouter = {
    prefix: '/:company_id/customer',
    routes: [
        {
            method: 'get',
            path: '/',
            middlewares: [],
            controller: findAllCustomers,
        },
        {
            method: 'get',
            path: '/:id',
            middlewares: [],
            controller: findOneCustomer,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [],
            controller: createCustomer,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [],
            controller: updateCustomer,
        },
        {
            method: 'delete',
            path: '/:id',
            middlewares: [],
            controller: deleteCustomer,
        },
        {
            method: 'post',
            path: '/login',
            middlewares: [],
            controller: loginCustomer,
        }
    ],
}

embedMethods( customerRouter, router );

module.exports = router;