const {
    Model,
    DataTypes,
} = require('sequelize');
const { table: companyTable } = require('./company.model');
const { table: customerTable } = require('./customer.model');


const ORDER_TABLE = 'orders';
const OrderSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Hace que el ID sea autoincremental
        allowNull: false,
      },
    status: {
        type: DataTypes.ENUM('EN ESPERA', 'CONFIRMADO', 'ENTREGADO'),
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
    companyId: {
        field: 'company_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: companyTable,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    customerId: {
        field: 'customer_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: customerTable,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
};

class Order extends Model{
    static associate({
        Company,
        Product,
        OrderProduct,
        Customer,
    }){
        this.belongsTo( Company, { as: 'company' } );
        this.belongsToMany( Product, {
            as: 'products',
            through: OrderProduct,
            foreignKey: 'orderId',
            otherKey: 'productId',
        });
        this.belongsTo( Customer );
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
};