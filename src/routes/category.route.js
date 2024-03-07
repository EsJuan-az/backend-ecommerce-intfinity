const { Router } = require('express');
const {
    findAllCategories,
    findOneCategory,
    createCategory,
    updateCategory,
    deleteCategory,
} = require('../controllers/category.controller');
const {
    s_findAllCategories,
    s_findOneCategory,
    s_createCategory,
    s_updateCategory,
    s_deleteCategory,
} = require('../schemas/category.schema');
const embedMethods = require('../helpers/embedMethods');
const { validatorHandler, regexGetAllQuery } = require('../middlewares/validation');
const router = Router();

const categoryRouter = {
    prefix: '/:company_id/category',
    routes: [
        {
            method: 'get',
            path: '/',
            middlewares: [validatorHandler(s_findAllCategories), regexGetAllQuery],
            controller: findAllCategories,
        },
        {
            method: 'get',
            path: '/:id',
            middlewares: [validatorHandler(s_findOneCategory)],
            controller: findOneCategory,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [validatorHandler(s_createCategory)],
            controller: createCategory,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [validatorHandler(s_updateCategory)],
            controller: updateCategory,
        },
        {
            method: 'delete',
            path: '/:id',
            middlewares: [validatorHandler(s_deleteCategory)],
            controller: deleteCategory,
        },
    ],
};

embedMethods( categoryRouter, router );

module.exports = router;