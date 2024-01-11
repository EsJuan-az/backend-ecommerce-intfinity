const { Model, DataTypes } = require('sequelize');
const { table: branchTable } = require('./branch.model');
const { table: productTable } = require('./product.model');

const BRANCH_PRODUCT_TABLE = 'branches_products';
const BranchProductSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Hace que el ID sea autoincremental
        allowNull: false,
      },
    branchId: {
        field: 'branch_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: branchTable,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    productId: {
        field: 'product_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: productTable,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
};

class BranchProduct extends Model{
    static associate(){}
    static config( sequelize ){
        return {
            sequelize,
            tableName: BRANCH_PRODUCT_TABLE,
            modelName: 'BranchProduct',
            timestamps: true,
        };
    }
}
module.exports = {
    model: BranchProduct,
    schema: BranchProductSchema,
    table: BRANCH_PRODUCT_TABLE,
};