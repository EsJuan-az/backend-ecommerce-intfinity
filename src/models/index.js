const { DataTypes } = require('sequelize');
const UserData = require('./users.model');
const OrderData = require('./orders.model');
const ProductData = require('./products.model');
const OrderProductData = require('./orders_products.model');
const CategoryData = require('./category.model');
const CompanyData = require('./company.model');
const ProviderData = require('./provider.model');
const ImageData = require('./image.model');

const models = [
    UserData,
    OrderData,
    ProductData,
    OrderProductData,
    CategoryData,
    CompanyData,
    ProviderData,
    ImageData,
];

function associateModels(){
    const { model:User } = UserData;
    const { model:Order } = OrderData;
    const { model: Product } = ProductData;
    const { model: OrderProduct } = OrderProductData;
    const { model: Company } = CompanyData;
    const { model: Category } = CategoryData;
    const { model: Provider } = ProviderData;
    const { model: Image } = ImageData;
    //Company has logo
    Company.hasOne( Image, {
        as: 'Logo',
        foreignKey: {
            allowNull: true,
        },
        });
    //User has profile pic
    User.hasOne( Image, {
        as: 'ProfilePic',
        foreignKey: {
            allowNull: true,
        },
        });
    //Product has images
    Product.hasMany( Image, {
        as: 'Images',
        foreignKey: {
            allowNull: true,
        },
        });
    //associates companies with everithing, Here are the 1-1 relations
    [ User, Order, Product, Category ].map( M => {
        Company.hasMany( M );
        M.belongsTo( Company );
    });

    //A N-1 relation occurs with Providers
    Company.belongsToMany( Provider, { through: 'companies_providers' } );
    Provider.belongsToMany( Company, { through: 'companies_providers' } );

    //associates users and orders.
    User.hasMany( Order );
    Order.belongsTo( User );

    //associates orders and products through the order_product table.
    Order.belongsToMany( Product, { through: OrderProduct  } );
    Product.belongsToMany( Order, { through: OrderProduct  } );

    //associates products and  categories
    Category.hasMany( Product );
    Product.belongsTo( Category );

    //associates products and providers
    Provider.hasMany( Product );
    Product.belongsTo( Provider )
}

function defineModels( sequelize ){

    for( let m of Object.keys(models) ){
        const { model, schema } = models[m]
        model.init( schema, model.config( sequelize ) );
    }
    associateModels();
}

module.exports = defineModels;