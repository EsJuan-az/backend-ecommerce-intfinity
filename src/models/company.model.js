const { Model, DataTypes } = require('sequelize');
const COMPANY_TABLE = 'companies';
const CompanySchema = {
    holder: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    NIT: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    direction: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bank_account_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bank: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bank_account_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
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
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
};

class Company extends Model{
    static config( sequelize ){
        return {
            sequelize,
            tableName: COMPANY_TABLE,
            modelName: 'Company',
            timestamps: true,
            indexes: [
                {
                    unique: true,
                    fields: ['email', 'active']
                },
                {
                    unique: true,
                    fields: ['phone', 'active']
                }
            ],
        };
    }
}

module.exports = {
    model: Company,
    schema: CompanySchema,
    table: COMPANY_TABLE,
};