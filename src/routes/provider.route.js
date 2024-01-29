const { Router } = require('express');
const {
    findAllProviders,
    findOneProvider,
    createProvider,
    updateProvider,
    deleteProvider,
} = require('../controllers/provider.controller');
const {
    s_findAllProviders,
    s_findOneProvider,
    s_createProvider,
    s_updateProvider,
    s_deleteProvider,
} = require('../schemas/provider.schema');
const embedMethods = require('../helpers/embedMethods');
const { validatorHandler } = require('../middlewares/validation');
const router = Router();

const providerRouter = {
    prefix: '/:company_id/provider',
    routes: [
        {
            method: 'get',
            path: '/',
            middlewares: [ validatorHandler(s_findAllProviders) ],
            controller: findAllProviders,
        },
        {
            method: 'get',
            path: '/:id',
            middlewares: [ validatorHandler(s_findOneProvider) ],
            controller: findOneProvider,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [ validatorHandler(s_createProvider) ],
            controller: createProvider,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [ validatorHandler(s_updateProvider) ],
            controller: updateProvider,
        },
        {
            method: 'delete',
            path: '/:id',
            middlewares: [ validatorHandler(s_deleteProvider) ],
            controller: deleteProvider,
        },
    ],
};

embedMethods( providerRouter, router );

module.exports = router;