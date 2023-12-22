const { Model, DataTypes } = require('sequelize');
const COMPANY_TABLE = 'companies';
const CompanySchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
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
        unique: true,
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
        };
    }
}

module.exports = {
    model: Company,
    schema: CompanySchema,
    table: COMPANY_TABLE,
};