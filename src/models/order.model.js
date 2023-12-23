const {
    Model,
    Sequelize,
    DataTypes,
} = require('sequelize');

const ORDER_TABLE = 'orders';
const OrderSchema = {
    status: {
        type: DataTypes.STRING,
        defaultValue: 'EN ESPERA',
    },
    bill_reference: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    direction: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
};

class Order extends Model{
    static associations(){

    }
    static config( sequelize ){
        return {
            sequelize,
            tableName: ORDER_TABLE,
            modelName: 'Order',
            timestamps: true,
        };
    }
}
module.exports = {
    model: Order,
    schema: OrderSchema,
    table: ORDER_TABLE,
}