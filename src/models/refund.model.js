const {
    Model,
    DataTypes,
} = require('sequelize');
const { table: companyTable } = require('./company.model');
const { table: userTable } = require('./user.model');

const { table: branchTable } = require('./branch.model');
const { table: purchaseTable } = require('./purchase.model');


const REFUND_TABLE = 'refunds';
const RefundSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Hace que el ID sea autoincremental
        allowNull: false,
      },
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
    branchId: {
        field: 'branch_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: branchTable,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    userId: {
        field: 'user_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: userTable,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    purchaseId: {
        field: 'purchase_id',
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
            model: purchaseTable,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
};

class Refund extends Model{
    static associate({
        Company,
        User,
        Product,
        RefundProduct,
        Purchase,
    }){
        this.belongsTo( Company, { as: 'company' } );
        this.belongsTo( User, { as: 'responsible' } );
        this.belongsToMany( Product, {
            as: 'products',
            through: RefundProduct,
            foreignKey: 'refundId',
            otherKey: 'productId',
        });
        this.belongsTo( Purchase );
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
};