const { Router } = require('express');
const {
    findAllProviders,
    findOneProvider,
    createProvider,
    updateProvider,
    deleteProvider,
} = require('../controllers/provider.controller');
const embedMethods = require('../helpers/embedMethods');
const router = Router();

const providerRouter = {
    prefix: '/:company_id/provider',
    routes: [
        {
            method: 'get',
            path: '/',
            middlewares: [],
            controller: findAllProviders,
        },
        {
            method: 'get',
            path: '/:id',
            middlewares: [],
            controller: findOneProvider,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [],
            controller: createProvider,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [],
            controller: updateProvider,
        },
        {
            method: 'delete',
            path: '/:id',
            middlewares: [],
            controller: deleteProvider,
        }
    ],
}

embedMethods( providerRouter, router );

module.exports = router;