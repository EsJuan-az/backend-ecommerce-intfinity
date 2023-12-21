const {
    Model,
    Sequelize,
    DataTypes,
} = require('sequelize');

const ORDER_TABLE = 'orders';
const OrderSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'EN ESPERA',
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    }

}