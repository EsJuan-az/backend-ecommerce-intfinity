const { Model, DataTypes } = require('sequelize');
const IMAGE_TABLE = 'images';
const { table: productTable } = require('./product.model');
const { table: categoryTable } = require('./category.model');
const { table: userTable } = require('./user.model');
const { table: companyTable } = require('./company.model');



const ImageSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Hace que el ID sea autoincremental
        allowNull: false,
      },
    URL: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    alternative_text: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    productId: {
        field: 'product_id',
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
            model: productTable,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    categoryId: {
        field: 'category_id',
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
            model: categoryTable,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    userId: {
        field: 'user_id',
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
            model: userTable,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    companyId: {
        field: 'company_id',
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
            model: companyTable,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
};

class Image extends Model{
    static associate({
        Product,
        Company,
        User,
    }){
        this.belongsTo( Product, { as: 'product' } );
        this.belongsTo( Company, { as: 'company' } );
        this.belongsTo( User, { as: 'user' } );
    

    }
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