const { Model, DataTypes } = require('sequelize');
const IMAGE_TABLE = 'images';
const ImageSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    URL: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    alternative_text: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}

class Image extends Model{
    static config( sequelize ){
        return {
            sequelize,
            tableName: IMAGE_TABLE,
            modelName: 'Image',
            timestamps: true,
        };
    }
}
module.exports = {
    model: Image,
    schema: ImageSchema,
    table: IMAGE_TABLE,
};