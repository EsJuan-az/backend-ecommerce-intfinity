const { Model, DataTypes } = require('sequelize');
const { table:productTable } = require('./product.model'); 
const { table:orderTable } = require('./order.model'); 
const ORDER_PRODUCT_TABLE = 'orders_products';
const OrderProductSchema = {
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
    orderId: {
        field: 'order_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: orderTable,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
};

class OrderProduct extends Model{
    static associate(){}

    static config( sequelize ){
        return {
            sequelize,
            tableName: ORDER_PRODUCT_TABLE,
            modelName: 'OrderProduct',
            timestamps: false,
        };
    }
}
module.exports = {
    model: OrderProduct,
    schema: OrderProductSchema,
    table: ORDER_PRODUCT_TABLE,
};