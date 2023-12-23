const { Router } = require('express');
const {
    findAllUsers,
    findOneUser,
    createUser,
    updateUser,
    deleteUser,
    loginUser,
} = require('../controllers/user.controller');
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
        },
        {
            method: 'post',
            path: '/login',
            middlewares: [],
            controller: loginUser,
        }
    ],
}

embedMethods( userRouter, router );

module.exports = router;