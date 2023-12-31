const { Model, DataTypes } = require('sequelize');
const PURCHASE_PRODUCT_TABLE = 'purchases_products';
const PurchaseProductSchema = {
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}

class PurchaseProduct extends Model{
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
}