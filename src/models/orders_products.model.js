const { Model, DataTypes } = require('sequelize');
const ORDER_PRODUCT_TABLE = 'orders_products';
const OrderProductSchema = {
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}

class OrderProduct extends Model{
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
}