const {
    Model,
    DataTypes,
} = require('sequelize');
const { table: branchTable } = require('./branch.model');
const { table: companyTable } = require('./company.model');
const { table: userTable } = require('./user.model');


const PURCHASE_TABLE = 'purchases';
const PurchaseSchema = {
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
    payment_method: {
        type: DataTypes.ENUM('TRANSFERENCIA', 'EFECTIVO', 'ECOMMERCE'),
        allowNull: false,
    },
    invoice_number: {
        type: DataTypes.STRING,
        allowNull: true,
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
    userId: {
        field: 'user_id',
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
            model: userTable,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
};

class Purchase extends Model{
    static associate({
        Company,
        User,
        Product,
        PurchaseProduct,
        Branch,
        Refund,
    }){
        Purchase.hasOne( Refund, {
            as: 'refund',
            foreignKey: 'purchaseId',
        });
        this.belongsTo( Company, { as: 'company' } );
        this.belongsTo( User, { as: 'responsible' } );
        this.belongsToMany( Product, {
            as: 'products',
            through: PurchaseProduct,
            foreignKey: 'purchaseId',
            otherKey: 'productId',
        });
        this.belongsTo( Branch );

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
};