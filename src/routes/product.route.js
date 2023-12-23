const { Router } = require('express');
const {
    findAllProducts,
    findOneProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/product.controller');
const embedMethods = require('../helpers/embedMethods');
const router = Router();

const productRouter = {
    prefix: '/:company_id/product',
    routes: [
        {
            method: 'get',
            path: '/',
            middlewares: [],
            controller: findAllProducts,
        },
        {
            method: 'get',
            path: '/:id',
            middlewares: [],
            controller: findOneProduct,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [],
            controller: createProduct,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [],
            controller: updateProduct,
        },
        {
            method: 'delete',
            path: '/:id',
            middlewares: [],
            controller: deleteProduct,
        }
    ],
}

embedMethods( productRouter, router );

module.exports = router;