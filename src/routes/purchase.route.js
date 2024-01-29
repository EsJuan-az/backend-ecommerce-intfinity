const { Router } = require('express');
const {
    findAllPurchases,
    findOnePurchase,
    createPurchase,
    updatePurchase,
    deletePurchase,
} = require('../controllers/purchase.controller');
const {
    s_findAllPurchases,
    s_findOnePurchase,
    s_createPurchase,
    s_updatePurchase,
    s_deletePurchase,
} = require('../schemas/purchase.schema');
const embedMethods = require('../helpers/embedMethods');
const { validatorHandler } = require('../middlewares/validation');
const router = Router();

const purchaseRouter = {
    prefix: '/:company_id/purchase',
    routes: [
        {
            method: 'get',
            path: '/',
            middlewares: [ validatorHandler(s_findAllPurchases) ],
            controller: findAllPurchases,
        },
        {
            method: 'get',
            path: '/:id',
            middlewares: [ validatorHandler(s_findOnePurchase) ],
            controller: findOnePurchase,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [ validatorHandler(s_createPurchase) ],
            controller: createPurchase,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [ validatorHandler(s_updatePurchase) ],
            controller: updatePurchase,
        },
        {
            method: 'delete',
            path: '/:id',
            middlewares: [ validatorHandler(s_deletePurchase) ],
            controller: deletePurchase,
        },
    ],
};

embedMethods( purchaseRouter, router );

module.exports = router;