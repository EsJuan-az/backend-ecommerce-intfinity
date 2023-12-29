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
const PurchaseData = require('./purchase.model');
const PurchaseProductData = require('./purchase_product.model');
const RefundData = require('./refund.model');
const RefundProductData = require('./refund_product.model');

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
    BranchProductData,
    PurchaseData,
    PurchaseProductData,
    RefundData,
    RefundProductData,
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
    const { model: BranchProduct } = BranchProductData;
    const { model: Purchase } = PurchaseData;
    const { model: PurchaseProduct } = PurchaseProductData;
    const { model: Refund } = RefundData;
    const { model: RefundProduct } = RefundProductData;


    //COMPANY AND IMAGE
    Company.hasOne( Image, {
        as: 'Logo',
        foreignKey: {
            allowNull: true,
        },
        });
    //ALL AND COMPANY
    [ User, Order, Product, Category, Customer, Branch, Purchase, Refund ].map( M => {
        Company.hasMany( M );
        M.belongsTo( Company );
    });
    //COMPANY AND PROVIDER
    Company.hasMany( Provider );
    Provider.belongsTo( Company );
    

    //USER AND IMAGE
    User.hasOne( Image, {
        as: 'ProfilePic',
        foreignKey: {
            allowNull: true,
        },
        });
    //ROLE AND USER
    Role.hasMany( User );
    User.belongsTo( Role );
    //USER AND PURCHASE
    User.hasMany( Purchase, {
        foreignKey: {
            allowNull: false,
        }
    })
    Purchase.belongsTo( User )
    //USER AND REFUND
    User.hasMany( Refund, {
        foreignKey: {
            allowNull: false,
        }
    })
    Refund.belongsTo( User )



    //PRODUCT AND IMAGE
    Product.hasMany( Image, {
        as: 'Images',
        foreignKey: {
            allowNull: true,
        },
        });
    //ORDER AND PRODUCT
    Order.belongsToMany( Product, { through: OrderProduct  } );
    Product.belongsToMany( Order, { through: OrderProduct  } );
    //PURCHASE AND PRODUCT
    Purchase.belongsToMany( Product, { through: PurchaseProduct } );
    Product.belongsToMany( Purchase, { through: PurchaseProduct } );
    //REFUND AND PRODUCT
    Refund.belongsToMany( Product, { through: RefundProduct } );
    Product.belongsToMany( Refund, { through: RefundProduct } );
    //CATEGORY AND PRODUCT
    Category.hasMany( Product );
    Product.belongsTo( Category );
    //PRODUCT AND PROVIDER
    Provider.hasMany( Product );
    Product.belongsTo( Provider )
    //PRODUCT AND BRANCH
    Branch.belongsToMany( Product, { through: BranchProduct } );
    Product.belongsToMany( Branch, { through: BranchProduct } );
    //CATEGORY AND IMAGE
    Category.hasOne( Image, {
        as: 'CategoryPic',
        foreignKey: {
            allowNull: true,
        },
        });
    //CUSTOMER AND ORDER
    Customer.hasMany( Order );
    Order.belongsTo( Customer );

    
    //BRANCH AND PURCHASE
    Branch.hasMany( Purchase );
    Purchase.belongsTo( Branch );

    //BRANCH AND USER
    Branch.hasMany( User );
    User.belongsTo( Branch );
    
    //PURCHASE AND REFUND
    Purchase.hasOne( Refund );
    Refund.belongsTo( Purchase );


}

function defineModels( sequelize ){

    for( let m of Object.keys(models) ){
        const { model, schema } = models[m]
        model.init( schema, model.config( sequelize ) );
    }
    associateModels();
}

module.exports = defineModels;