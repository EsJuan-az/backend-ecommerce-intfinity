const { Router } = require('express');
const {
    findAllImages,
    findOneImage,
    createImage,
    updateImage,
    deleteImage,
} = require('../controllers/image.controller');
const {
    s_findAllImages,
    s_findOneImage,
    s_createImage,
    s_updateImage,
    s_deleteImage,
} = require('../schemas/image.schema');
const embedMethods = require('../helpers/embedMethods');
const { validatorHandler, regexGetAllQuery } = require('../middlewares/validation');
const router = Router();

const imageRouter = {
    routes: [
        {
            method: 'get',
            path: '/',
            middlewares: [ validatorHandler( s_findAllImages ), regexGetAllQuery ],
            controller: findAllImages,
        },
        {
            method: 'get',
            path: '/:id',
            middlewares: [ validatorHandler( s_findOneImage ) ],
            controller: findOneImage,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [ validatorHandler( s_createImage ) ],
            controller: createImage,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [ validatorHandler( s_updateImage ) ],
            controller: updateImage,
        },
        {
            method: 'delete',
            path: '/:id',
            middlewares: [ validatorHandler( s_deleteImage ) ],
            controller: deleteImage,
        },
    ],
};

embedMethods( imageRouter, router );


module.exports = router;