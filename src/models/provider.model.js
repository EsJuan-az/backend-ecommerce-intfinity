const { Model, DataTypes } = require('sequelize');
const PROVIDER_TABLE = 'providers';
const ProviderSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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
};

class Provider extends Model{
    static config( sequelize ){
        return {
            sequelize,
            tableName: PROVIDER_TABLE,
            modelName: 'Provider',
            timestamps: true,
        };
    }
}

module.exports = {
    model: Provider,
    schema: ProviderSchema,
    table: PROVIDER_TABLE,
};