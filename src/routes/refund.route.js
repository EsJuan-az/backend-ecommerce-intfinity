const { Router } = require('express');
const {
    findAllRefunds,
    findOneRefund,
    createRefund,
    updateRefund,
    deleteRefund,
} = require('../controllers/refund.controller');
const embedMethods = require('../helpers/embedMethods');
const router = Router();

const purchaseRouter = {
    prefix: '/:company_id/refund',
    routes: [
        {
            method: 'get',
            path: '/',
            middlewares: [],
            controller: findAllRefunds,
        },
        {
            method: 'get',
            path: '/:id',
            middlewares: [],
            controller: findOneRefund,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [],
            controller: createRefund,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [],
            controller: updateRefund,
        },
        {
            method: 'delete',
            path: '/:id',
            middlewares: [],
            controller: deleteRefund,
        }
    ],
}

embedMethods( purchaseRouter, router );

module.exports = router;