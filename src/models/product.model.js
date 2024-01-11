const { Model, DataTypes } = require('sequelize');
const { table: categoryTable } = require('./category.model');

const PRODUCT_TABLE = 'products';
const { table: companyTable } = require('./company.model');
const { table: providerTable } = require('./provider.model');

const ProductSchema = {
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
    color: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    size: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    refer_id: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    categoryId: {
        field: 'category_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: categoryTable,
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
    providerId: {
        field: 'provider_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: providerTable,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
};

class Product extends Model{
    static associate({
        Company,
        Order,
        OrderProduct,
        PurchaseProduct,
        Purchase,
        Refund,
        RefundProduct,
        Image,
        Category,
        Provider,
        Branch,
        BranchProduct,
    }){
        this.belongsTo( Company, { as: 'company' } );
        this.belongsTo( Category , { as: 'category' });
        this.belongsTo( Provider, { as: 'provider' });
        this.belongsToMany( Order, { as: 'orders', through: OrderProduct  } );
        this.belongsToMany( Purchase, { as: 'purchases', through: PurchaseProduct } );
        this.belongsToMany( Refund, { as: 'refunds', through: RefundProduct } );
        this.belongsToMany( Branch, { as: 'branches', through: BranchProduct } );
        this.hasMany( Image, {
            as: 'pictures', 
            foreignKey: 'productId',
        });

    }
    static config( sequelize ){
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timestamps: true,
        };
    }
}
module.exports = {
    model: Product,
    schema: ProductSchema,
    table: PRODUCT_TABLE,
};