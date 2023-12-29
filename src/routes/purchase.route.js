const { Router } = require('express');
const {
    findAllPurchases,
    findOnePurchase,
    createPurchase,
    updatePurchase,
    deletePurchase,
} = require('../controllers/purchase.controller');
const embedMethods = require('../helpers/embedMethods');
const router = Router();

const purchaseRouter = {
    prefix: '/:company_id/purchase',
    routes: [
        {
            method: 'get',
            path: '/',
            middlewares: [],
            controller: findAllPurchases,
        },
        {
            method: 'get',
            path: '/:id',
            middlewares: [],
            controller: findOnePurchase,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [],
            controller: createPurchase,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [],
            controller: updatePurchase,
        },
        {
            method: 'delete',
            path: '/:id',
            middlewares: [],
            controller: deletePurchase,
        }
    ],
}

embedMethods( purchaseRouter, router );

module.exports = router;