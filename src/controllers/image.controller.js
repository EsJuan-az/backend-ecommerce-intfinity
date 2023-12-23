const ImageService = require('../services/image.service')
module.exports = {
    async findAllImages(req, res, next){
        try{
            const images = await ImageService.findAll();
            return res.status(200)
                        .json({
                            result: images,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async findOneImage( req, res, next ){
        try{
            const {
                params: {
                    id,
                },
            } = req;
            const image = await ImageService.findOne( id );
            return res.status(200)
                        .json({
                            result: image,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async createImage( req, res, next ){
        try{
            const { body } = req;
            const newImage = await ImageService.create( body );
            return res.status(201)
                        .json({
                            result: newImage,
                            statusCode: 201,
                        });
        }catch(err){
            next(err);
        }
    },
    async updateImage( req, res, next ){
        try{
            const {
                params: {
                    id,
                },
                body,
            } = req;
            const newImage = await ImageService.update( id, body );
            return res.status(200)
                        .json({
                            result: newImage,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    },
    async deleteImage( req, res, next ){
        try{
            const {
                params: {
                    id,
                },
            } = req;
            const newImage = await ImageService.delete( id );
            return res.status(200)
                        .json({
                            result: newImage,
                            statusCode: 200,
                        });
        }catch(err){
            next(err);
        }
    }
}