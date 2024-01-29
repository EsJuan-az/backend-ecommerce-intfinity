const { Router } = require('express');
const {
    findAllUsers,
    findOneUser,
    createUser,
    updateUser,
    deleteUser,
    loginUser,
} = require('../controllers/user.controller');
const {
    s_findAllUsers,
    s_findOneUser,
    s_createUser,
    s_updateUser,
    s_deleteUser,
    s_loginUser,
} = require('../schemas/user.schema');
const embedMethods = require('../helpers/embedMethods');
const { validatorHandler } = require('../middlewares/validation');
const router = Router();

const userRouter = {
    prefix: '',
    routes: [
        {
            method: 'get',
            path: '/',
            middlewares: [ validatorHandler( s_findAllUsers ) ],
            controller: findAllUsers,
        },
        {
            method: 'get',
            path: '/:id',
            middlewares: [ validatorHandler( s_findOneUser ) ],
            controller: findOneUser,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [ validatorHandler( s_createUser ) ],
            controller: createUser,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [ validatorHandler( s_updateUser ) ],
            controller: updateUser,
        },
        {
            method: 'delete',
            path: '/:id',
            middlewares: [ validatorHandler( s_deleteUser ) ],
            controller: deleteUser,
        },
        {
            method: 'post',
            path: '/login',
            middlewares: [ validatorHandler( s_loginUser ) ],
            controller: loginUser,
        },
    ],
};

embedMethods( userRouter, router );

module.exports = router;