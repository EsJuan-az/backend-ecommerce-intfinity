const boom = require('@hapi/boom');
const { models: { Image } } = require('../libs/sequelize');
class ImageService{
    static async findAll(query, offset, limit){
        const image = await Image.findAll({
            where: query,
            offset,
            limit,
        });
        return image;
    }
    static async findOne( id ){
        const image = await Image.findByPk( id );
        if( !image ){
            throw boom.notFound('image not found');
        }
        return image;
    }
    static async create( data ){
        const image = await Image.create( data );
        return image;
    }
    static async update( id, data ){
        const image = await ImageService.findOne( id );
        const newImage = await image.update( data );
        return newImage;
    }
    static async delete( id ){
        const image = await ImageService.findOne( id );
        const retImage = image.toJSON();
        //TODO: Destroy link.
        await image.destroy();
        return retImage;
    }
}
module.exports = ImageService;