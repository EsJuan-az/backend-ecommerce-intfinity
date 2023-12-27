const { Router } = require('express');
const {
    findAllRoles,
    findOneRole,
    createRole,
    updateRole,
    deleteRole
} = require('../controllers/role.controller');
const embedMethods = require('../helpers/embedMethods');
const router = Router();

const roleRouter = {
    routes: [
        {
            method: 'get',
            path: '/',
            middlewares: [],
            controller: findAllRoles,
        },
        {
            method: 'get',
            path: '/:id',
            middlewares: [],
            controller: findOneRole,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [],
            controller: createRole,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [],
            controller: updateRole,
        },
        {
            method: 'delete',
            path: '/:id',
            middlewares: [],
            controller: deleteRole,
        }
    ],
}

embedMethods( roleRouter, router );


module.exports = router;