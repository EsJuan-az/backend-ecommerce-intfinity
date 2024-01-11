const {
    Model,
    DataTypes,
} = require('sequelize');
 
const { table: branchTable } = require('./branch.model');
const { table: companyTable } = require('./company.model');
const { table: roleTable } = require('./role.model');



const USER_TABLE = 'users';
//We establish all user fields.
const UserSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Hace que el ID sea autoincremental
        allowNull: false,
      },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
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
    roleId: {
        field: 'role_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: roleTable,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
};

class User extends Model{
    static associate({
        Image,
        Role,
        Purchase,
        Refund,
        Branch,
    }){
        this.hasOne( Image, {
            as: 'profile',
            foreignKey: 'userId',
        });
        this.belongsTo( Role, { as: 'role' } );
        this.hasMany( Purchase, {
            as: 'purchases',
            foreignKey: 'userId',
        });
        this.hasMany( Refund, {
            as: 'refunds',
            foreignKey: 'userId',
        });
        this.belongsTo( Branch, { as: 'branch' } );
    }
    static config( sequelize ){
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: true,
            indexes: [
                {
                    unique: true,
                    fields: ['email', 'active'],
                },
                {
                    unique: true,
                    fields: ['phone', 'active'],
                },
            ],
        };
    }
}

module.exports = {
    model: User,
    schema: UserSchema,
    table: USER_TABLE,
};