const { Model, DataTypes } = require('sequelize');
const { table:productTable } = require('./product.model'); 
const { table:refundTable } = require('./refund.model'); 
const REFUND_PRODUCT_TABLE = 'refunds_products';
const RefundProductSchema = {
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
    refundId: {
        field: 'refund_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: refundTable,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
};

class RefundProduct extends Model{
    static associate(){}

    static config( sequelize ){
        return {
            sequelize,
            tableName: REFUND_PRODUCT_TABLE,
            modelName: 'RefundProduct',
            timestamps: false,
        };
    }
}
module.exports = {
    model: RefundProduct,
    schema: RefundProductSchema,
    table: REFUND_PRODUCT_TABLE,
};