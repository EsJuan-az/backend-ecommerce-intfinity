const { DataTypes } = require('sequelize');
const UserData = require('./user.model');
const OrderData = require('./order.model');
const ProductData = require('./product.model');
const OrderProductData = require('./order_product.model');
const CategoryData = require('./category.model');
const CompanyData = require('./company.model');
const ProviderData = require('./provider.model');
const ImageData = require('./image.model');
const RoleData = require('./role.model');
const CustomerData = require('./customer.model');
const BranchData = require('./branch.model');
const BranchProductData = require('./branch_product.model');


const models = [
    UserData,
    OrderData,
    ProductData,
    OrderProductData,
    CategoryData,
    ProviderData,
    CompanyData,
    ImageData,
    RoleData,
    CustomerData,
    BranchData,
    BranchProductData
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
    const { model: Role } = RoleData;
    const { model: Customer } = CustomerData;
    const { model: Branch } = BranchData;
    const { model: BranchProduct } = BranchProductData

    //COMPANY:
    //Company has logo
    Company.hasOne( Image, {
        as: 'Logo',
        foreignKey: {
            allowNull: true,
        },
        });
    //associates companies with everithing, Here are the 1-1 relations
    [ User, Order, Product, Category, Customer, Branch ].map( M => {
        Company.hasMany( M );
        M.belongsTo( Company );
    });
    //A N-1 relation occurs with Providers
    Company.hasMany( Provider );
    Provider.belongsTo( Company );
    

    //USER:
    //User has profile pic
    User.hasOne( Image, {
        as: 'ProfilePic',
        foreignKey: {
            allowNull: true,
        },
        });
    //associates roles and users
    Role.hasMany( User );
    User.belongsTo( Role );




    //PRODUCT:
    //Product has images
    Product.hasMany( Image, {
        as: 'Images',
        foreignKey: {
            allowNull: true,
        },
        });
    //associates orders and products through the order_product table.
    Order.belongsToMany( Product, { through: OrderProduct  } );
    Product.belongsToMany( Order, { through: OrderProduct  } );
    //associates products and  categories
    Category.hasMany( Product );
    Product.belongsTo( Category );
    //associates products and providers
    Provider.hasMany( Product );
    Product.belongsTo( Provider )
    //associates branches and products.
    Branch.belongsToMany( Product, { through: BranchProduct } );
    Product.belongsToMany( Branch, { through: BranchProduct } );

    




    //CATEGORY:
    //Category has image
    Category.hasOne( Image, {
        as: 'CategoryPic',
        foreignKey: {
            allowNull: true,
        },
        });
    



    //CUSTOMER
    //associates customers and orders.
    Customer.hasMany( Order );
    Order.belongsTo( Customer );

    




}

function defineModels( sequelize ){

    for( let m of Object.keys(models) ){
        const { model, schema } = models[m]
        model.init( schema, model.config( sequelize ) );
    }
    associateModels();
}

module.exports = defineModels;