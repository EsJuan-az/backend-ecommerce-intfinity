const { Model, DataTypes } = require('sequelize');
const PROVIDER_TABLE = 'providers';
const ProviderSchema = {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    NIT: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    direction: {
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
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
};

class Provider extends Model{
    static config( sequelize ){
        return {
            sequelize,
            tableName: PROVIDER_TABLE,
            modelName: 'Provider',
            timestamps: true,
            indexes: [
                {
                    unique: true,
                    fields: ['email', 'active', 'CompanyId'],
                },
                {
                    unique: true,
                    fields: ['phone', 'active', 'CompanyId'],
                },
            ],
        };
    }
}

module.exports = {
    model: Provider,
    schema: ProviderSchema,
    table: PROVIDER_TABLE,
};