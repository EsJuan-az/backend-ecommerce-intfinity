const { Model, DataTypes } = require('sequelize');
const CATEGORY_TABLE = 'categories';
const CategorySchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
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