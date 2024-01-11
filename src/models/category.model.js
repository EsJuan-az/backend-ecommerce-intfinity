const { Model, DataTypes } = require('sequelize');
const { table: companyTable } = require('./company.model');

const CATEGORY_TABLE = 'categories';
const CategorySchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Hace que el ID sea autoincremental
        allowNull: false,
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    companyId: {
        field: 'company_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: companyTable,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
};

class Category extends Model{
    static associate({
        Company,
        Product,
        Image,
    }){
        this.belongsTo( Company, { as: 'company' } );
        this.hasMany( Product, {
            as: 'products',
            foreignKey: 'categoryId',
        });
        this.hasOne( Image, {
            as: 'image',
            foreignKey: 'categoryId',
            });
    }
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