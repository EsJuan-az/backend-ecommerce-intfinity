const { Router } = require('express');
const {
    findAllOrders,
    findOneOrder,
    createOrder,
    updateOrder,
    deleteOrder,
} = require('../controllers/order.controller');
const embedMethods = require('../helpers/embedMethods');
const router = Router();

const orderRouter = {
    prefix: '/:company_id/order',
    routes: [
        {
            method: 'get',
            path: '/',
            middlewares: [],
            controller: findAllOrders,
        },
        {
            method: 'get',
            path: '/:id',
            middlewares: [],
            controller: findOneOrder,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [],
            controller: createOrder,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [],
            controller: updateOrder,
        },
        {
            method: 'delete',
            path: '/:id',
            middlewares: [],
            controller: deleteOrder,
        }
    ],
}

embedMethods( orderRouter, router );

module.exports = router;