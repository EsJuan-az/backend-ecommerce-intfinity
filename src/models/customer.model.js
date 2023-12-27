const {
    Model,
    DataTypes,
    Sequelize,
 } = require('sequelize');
 
const CUSTOMER_TABLE = 'customers';
//We establish all user fields.
const CustomerSchema = {
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

};

class Customer extends Model{
    static associations(){
        //We define relations.
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
                    fields: ['email', 'CompanyId', 'active']
                },
                {
                    unique: true,
                    fields: ['phone', 'CompanyId', 'active']
                }
            ],
        };
    }
}

module.exports = {
    model: Customer,
    schema: CustomerSchema,
    table: CUSTOMER_TABLE,
};