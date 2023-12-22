const { Model, DataTypes } = require('sequelize');
const CATEGORY_TABLE = 'categories';
const CategorySchema = {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
};

class Category extends Model{
    static config( sequelize ){
        return {
            sequelize,
            tableName: CATEGORY_TABLE,
            modelName: 'Category',
            timestamps: true,
        };
    }
}

module.exports = {
    model: Category,
    schema: CategorySchema,
    table: CATEGORY_TABLE,
};