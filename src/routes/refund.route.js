const { Router } = require('express');
const {
    findAllRefunds,
    findOneRefund,
    createRefund,
    updateRefund,
    deleteRefund,
} = require('../controllers/refund.controller');
const {
    s_findAllRefunds,
    s_findOneRefund,
    s_createRefund,
    s_updateRefund,
    s_deleteRefund,
} = require('../schemas/refund.schema');
const embedMethods = require('../helpers/embedMethods');
const { validatorHandler } = require('../middlewares/validation');
const router = Router();

const purchaseRouter = {
    prefix: '/:company_id/refund',
    routes: [
        {
            method: 'get',
            path: '/',
            middlewares: [ validatorHandler(s_findAllRefunds) ],
            controller: findAllRefunds,
        },
        {
            method: 'get',
            path: '/:id',
            middlewares: [ validatorHandler(s_findOneRefund) ],
            controller: findOneRefund,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [ validatorHandler(s_createRefund) ],
            controller: createRefund,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [ validatorHandler(s_updateRefund) ],
            controller: updateRefund,
        },
        {
            method: 'delete',
            path: '/:id',
            middlewares: [ validatorHandler(s_deleteRefund) ],
            controller: deleteRefund,
        },
    ],
};

embedMethods( purchaseRouter, router );

module.exports = router;