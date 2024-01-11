const {
    Model,
    DataTypes,
 } = require('sequelize');
const { table: companyTable } = require('./company.model');
 
const CUSTOMER_TABLE = 'customers';
//We establish all user fields.
const CustomerSchema = {
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

class Customer extends Model{
    static associate({
        Company,
        Order,
    }){
        this.belongsTo( Company, { as: 'company' } );
        this.hasMany( Order, {
            as: 'orders',
            foreignKey: 'customerId',
        });
    }
    static config( sequelize ){
        return {
            sequelize,
            tableName: CUSTOMER_TABLE,
            modelName: 'Customer',
            timestamps: true,
            indexes: [
                {
                    unique: true,
                    fields: ['email', 'CompanyId', 'active'],
                },
                {
                    unique: true,
                    fields: ['phone', 'CompanyId', 'active'],
                },
            ],
        };
    }
}

module.exports = {
    model: Customer,
    schema: CustomerSchema,
    table: CUSTOMER_TABLE,
};