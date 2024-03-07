const { Router } = require('express');
const {
    findAllRoles,
    findOneRole,
    createRole,
    updateRole,
    deleteRole,
} = require('../controllers/role.controller');
const {
    s_findAllRoles,
    s_findOneRole,
    s_createRole,
    s_updateRole,
    s_deleteRole,
} = require('../schemas/role.schema');
const embedMethods = require('../helpers/embedMethods');
const { validatorHandler, regexGetAllQuery } = require('../middlewares/validation');
const router = Router();

const roleRouter = {
    routes: [
        {
            method: 'get',
            path: '/',
            middlewares: [ validatorHandler( s_findAllRoles ), regexGetAllQuery ],
            controller: findAllRoles,
        },
        {
            method: 'get',
            path: '/:id',
            middlewares: [ validatorHandler( s_findOneRole ) ],
            controller: findOneRole,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [ validatorHandler( s_createRole ) ],
            controller: createRole,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [ validatorHandler( s_updateRole ) ],
            controller: updateRole,
        },
        {
            method: 'delete',
            path: '/:id',
            middlewares: [ validatorHandler( s_deleteRole ) ],
            controller: deleteRole,
        },
    ],
};

embedMethods( roleRouter, router );


module.exports = router;