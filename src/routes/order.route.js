const { Router } = require('express');
const {
    findAllOrders,
    findOneOrder,
    createOrder,
    updateOrder,
    deleteOrder,
} = require('../controllers/order.controller');
const {
    s_findAllOrders,
    s_findOneOrder,
    s_createOrder,
    s_updateOrder,
    s_deleteOrder,
} = require('../schemas/order.schema');
const embedMethods = require('../helpers/embedMethods');
const { validatorHandler, regexGetAllQuery } = require('../middlewares/validation');
const router = Router();

const orderRouter = {
    prefix: '/:company_id/order',
    routes: [
        {
            method: 'get',
            path: '/',
            middlewares: [ validatorHandler( s_findAllOrders ), regexGetAllQuery ],
            controller: findAllOrders,
        },
        {
            method: 'get',
            path: '/:id',
            middlewares: [ validatorHandler( s_findOneOrder ) ],
            controller: findOneOrder,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [ validatorHandler( s_createOrder ) ],
            controller: createOrder,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [ validatorHandler( s_updateOrder ) ],
            controller: updateOrder,
        },
        {
            method: 'delete',
            path: '/:id',
            middlewares: [ validatorHandler( s_deleteOrder ) ],
            controller: deleteOrder,
        },
    ],
};

embedMethods( orderRouter, router );

module.exports = router;