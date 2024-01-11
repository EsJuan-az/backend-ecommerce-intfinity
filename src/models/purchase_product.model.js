const { Model, DataTypes } = require('sequelize');
const { table:productTable } = require('./product.model'); 
const { table:purchaseTable } = require('./purchase.model'); 
const PURCHASE_PRODUCT_TABLE = 'purchases_products';
const PurchaseProductSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Hace que el ID sea autoincremental
        allowNull: false,
      },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    purchaseId: {
        field: 'purchase_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: purchaseTable,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
};

class PurchaseProduct extends Model{
    static associate(){}

    static config( sequelize ){
        return {
            sequelize,
            tableName: PURCHASE_PRODUCT_TABLE,
            modelName: 'PurchaseProduct',
            timestamps: false,
        };
    }
}
module.exports = {
    model: PurchaseProduct,
    schema: PurchaseProductSchema,
    table: PURCHASE_PRODUCT_TABLE,
};