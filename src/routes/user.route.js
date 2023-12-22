const { Router } = require('express');
const {
    findAllUsers,
    findOneUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/user.controller');
const { create } = require('../services/user.service');
const embedMethods = require('../helpers/embedMethods');
const router = Router();

const userRouter = {
    prefix: '/:company_id/user',
    routes: [
        {
            method: 'get',
            path: '/',
            middlewares: [],
            controller: findAllUsers,
        },
        {
            method: 'get',
            path: '/:id',
            middlewares: [],
            controller: findOneUser,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [],
            controller: createUser,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [],
            controller: updateUser,
        },
        {
            method: 'delete',
            path: '/:id',
            middlewares: [],
            controller: deleteUser,
        }
    ],
}

embedMethods( userRouter, router );

module.exports = router;