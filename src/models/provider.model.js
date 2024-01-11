const { Model, DataTypes } = require('sequelize');
const { table: companyTable } = require('./company.model');

const PROVIDER_TABLE = 'providers';
const ProviderSchema = {
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

class Provider extends Model{
    static associate({
        Company,
        Product,
    }){
        this.belongsTo( Company, { as: 'company' });
        this.hasMany( Product, {
            as: 'products',
            foreignKey: 'providerId',
        } );
    }

    static config( sequelize ){
        return {
            sequelize,
            tableName: PROVIDER_TABLE,
            modelName: 'Provider',
            timestamps: true,
            indexes: [
                {
                    unique: true,
                    fields: ['email', 'active', 'company_id'],
                },
                {
                    unique: true,
                    fields: ['phone', 'active', 'company_id'],
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