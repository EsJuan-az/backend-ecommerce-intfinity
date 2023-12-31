const { Router } = require('express');
const {
    findAllBranches,
    findOneBranch,
    createBranch,
    updateBranch,
    deleteBranch,
} = require('../controllers/branch.controller');

const {
    s_findAllBranches,
    s_findOneBranch,
    s_createBranch,
    s_updateBranch,
    s_deleteBranch,
} = require('../schemas/branch.schema');

const { validatorHandler } = require('../middlewares/validation')
const embedMethods = require('../helpers/embedMethods');
const router = Router();

const branchRouter = {
    prefix: '/:company_id/branch',
    routes: [
        {
            method: 'get',
            path: '/',
            middlewares: [ validatorHandler( s_findAllBranches ) ],
            controller: findAllBranches,
        },
        {
            method: 'get',
            path: '/:id',
            middlewares: [ validatorHandler( s_findOneBranch ) ],
            controller: findOneBranch,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [ validatorHandler( s_createBranch ) ],
            controller: createBranch,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [ validatorHandler( s_updateBranch ) ],
            controller: updateBranch,
        },
        {
            method: 'delete',
            path: '/:id',
            middlewares: [ validatorHandler( s_deleteBranch ) ],
            controller: deleteBranch,
        }
    ],
}

embedMethods( branchRouter, router );

module.exports = router;