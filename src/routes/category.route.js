const { Router } = require('express');
const {
    findAllCategories,
    findOneCategory,
    createCategory,
    updateCategory,
    deleteCategory,
} = require('../controllers/category.controller');
const embedMethods = require('../helpers/embedMethods');
const router = Router();

const categoryRouter = {
    prefix: '/:company_id/category',
    routes: [
        {
            method: 'get',
            path: '/',
            middlewares: [],
            controller: findAllCategories,
        },
        {
            method: 'get',
            path: '/:id',
            middlewares: [],
            controller: findOneCategory,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [],
            controller: createCategory,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [],
            controller: updateCategory,
        },
        {
            method: 'delete',
            path: '/:id',
            middlewares: [],
            controller: deleteCategory,
        }
    ],
}

embedMethods( categoryRouter, router );

module.exports = router;