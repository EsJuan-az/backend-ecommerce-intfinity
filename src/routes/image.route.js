const { Router } = require('express');
const {
    findAllImages,
    findOneImage,
    createImage,
    updateImage,
    deleteImage
} = require('../controllers/image.controller');
const embedMethods = require('../helpers/embedMethods');
const router = Router();

const imageRouter = {
    routes: [
        {
            method: 'get',
            path: '/',
            middlewares: [],
            controller: findAllImages,
        },
        {
            method: 'get',
            path: '/:id',
            middlewares: [],
            controller: findOneImage,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [],
            controller: createImage,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [],
            controller: updateImage,
        },
        {
            method: 'delete',
            path: '/:id',
            middlewares: [],
            controller: deleteImage,
        }
    ],
}

embedMethods( imageRouter, router );


module.exports = router;