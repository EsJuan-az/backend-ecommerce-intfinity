const { Router } = require('express');
const {
    findAllProducts,
    findOneProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/product.controller');
const {
    s_findAllProducts,
    s_findOneProduct,
    s_createProduct,
    s_updateProduct,
    s_deleteProduct,
} = require('../schemas/product.schema');
const embedMethods = require('../helpers/embedMethods');
const { validatorHandler } = require('../middlewares/validation');
const router = Router();

const productRouter = {
    prefix: '/:company_id/product',
    routes: [
        {
            method: 'get',
            path: '/',
            middlewares: [ validatorHandler( s_findAllProducts ) ],
            controller: findAllProducts,
        },
        {
            method: 'get',
            path: '/:id',
            middlewares: [ validatorHandler( s_findOneProduct ) ],
            controller: findOneProduct,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [ validatorHandler( s_createProduct ) ],
            controller: createProduct,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [ validatorHandler( s_updateProduct ) ],
            controller: updateProduct,
        },
        {
            method: 'delete',
            path: '/:id',
            middlewares: [ validatorHandler( s_deleteProduct ) ],
            controller: deleteProduct,
        },
    ],
};

embedMethods( productRouter, router );

module.exports = router;