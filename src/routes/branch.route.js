const { Router } = require('express');
const {
    findAllBranches,
    findOneBranch,
    createBranch,
    updateBranch,
    deleteBranch,
} = require('../controllers/branch.controller');
const embedMethods = require('../helpers/embedMethods');
const router = Router();

const branchRouter = {
    prefix: '/:company_id/branch',
    routes: [
        {
            method: 'get',
            path: '/',
            middlewares: [],
            controller: findAllBranches,
        },
        {
            method: 'get',
            path: '/:id',
            middlewares: [],
            controller: findOneBranch,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [],
            controller: createBranch,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [],
            controller: updateBranch,
        },
        {
            method: 'delete',
            path: '/:id',
            middlewares: [],
            controller: deleteBranch,
        }
    ],
}

embedMethods( branchRouter, router );

module.exports = router;