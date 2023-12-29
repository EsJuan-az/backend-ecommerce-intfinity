const {
    Model,
    Sequelize,
    DataTypes,
} = require('sequelize');

const REFUND_TABLE = 'refunds';
const RefundSchema = {
    customer_email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    type: {
        type: DataTypes.ENUM('REEMBOLSO', 'CAMBIO DE PRODUCTO', 'CAMBIO POR BONO'),
        allowNull: false,
    },
    reason: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    refund_number: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
};

class Refund extends Model{
    static associations(){

    }
    static config( sequelize ){
        return {
            sequelize,
            tableName: REFUND_TABLE,
            modelName: 'Refund',
            timestamps: true,
        };
    }
}
module.exports = {
    model: Refund,
    schema: RefundSchema,
    table: REFUND_TABLE,
}