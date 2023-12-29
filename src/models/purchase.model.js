const {
    Model,
    Sequelize,
    DataTypes,
} = require('sequelize');

const PURCHASE_TABLE = 'purchase';
const PurchaseSchema = {
    customer_email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    payment_method: {
        type: DataTypes.ENUM('TRANSFERENCIA', 'EFECTIVO', 'ECOMMERCE'),
        allowNull: false,
    },
    invoice_number: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
};

class Purchase extends Model{
    static associations(){

    }
    static config( sequelize ){
        return {
            sequelize,
            tableName: PURCHASE_TABLE,
            modelName: 'Purchase',
            timestamps: true,
        };
    }
}
module.exports = {
    model: Purchase,
    schema: PurchaseSchema,
    table: PURCHASE_TABLE,
}