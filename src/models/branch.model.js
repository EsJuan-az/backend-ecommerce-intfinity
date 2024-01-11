const { Model, DataTypes } = require('sequelize');
const { table: companyTable } = require('./company.model');

const BRANCH_TABLE = 'branches';
const BranchSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Hace que el ID sea autoincremental
        allowNull: false,
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    direction: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
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
};

class Branch extends Model{
    static associate({
        Company,
        Product,
        BranchProduct,
        Purchase,
        User,
        Refund,
    }){
        Branch.belongsTo( Company, { as: 'company' } );
        Branch.belongsToMany( Product, {
            as: 'products',
            through: BranchProduct,
            foreignKey: 'branchId',
            otherKey: 'productId',
        });
        Branch.hasMany( Purchase, {
            as: 'purchases',
            foreignKey: 'branchId',
        });
        Branch.hasMany( Refund, {
            as: 'refunds',
            foreignKey: 'branchId',
        });
        Branch.hasMany( User, {
            as: 'users',
            foreignKey: 'branchId',
        });
    }
    static config( sequelize ){
        return {
            sequelize,
            tableName: BRANCH_TABLE,
            modelName: 'Branch',
            timestamps: true,
        };
    }
}

module.exports = {
    model: Branch,
    schema: BranchSchema,
    table: BRANCH_TABLE,
};