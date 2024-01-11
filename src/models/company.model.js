const { Model, DataTypes } = require('sequelize');
const COMPANY_TABLE = 'companies';
const CompanySchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Hace que el ID sea autoincremental
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
    bank_account_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    social_reason: {
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
    static associate({
        Image,
        User,
        Order,
        Category,
        Customer,
        Purchase,
        Refund, 
        Provider,
        Product,
        Branch,
    }){
        this.hasOne( Image, {
            as: 'logo',
            foreignKey: 'companyId',
        });
        this.hasMany( User, {
            as: 'users',
            foreignKey: 'companyId',
        });
        this.hasMany( Order, {
            as: 'orders',
            foreignKey: 'companyId',
        });
        this.hasMany( Category, {
            as: 'categories',
            foreignKey: 'companyId',
        });
        this.hasMany( Customer, {
            as: 'customers',
            foreignKey: 'companyId',
        });
        this.hasMany( Purchase, {
            as: 'purchases',
            foreignKey: 'companyId',
        });
        this.hasMany( Refund, {
            as: 'refunds',
            foreignKey: 'companyId',
        });
        this.hasMany( Provider, {
            as: 'providers',
            foreignKey: 'companyId',
        });
        this.hasMany( Product, {
            as: 'products',
            foreignKey: 'companyId',
        });
        this.hasMany( Branch, {
            as: 'branches',
            foreignKey: 'companyId',
        });
    }

    static config( sequelize ){
        return {
            sequelize,
            tableName: COMPANY_TABLE,
            modelName: 'Company',
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
    model: Company,
    schema: CompanySchema,
    table: COMPANY_TABLE,
};