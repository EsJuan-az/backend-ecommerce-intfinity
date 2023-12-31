const { Model, DataTypes } = require('sequelize');
const REFUND_PRODUCT_TABLE = 'refunds_products';
const RefundProductSchema = {
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}

class RefundProduct extends Model{
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
}