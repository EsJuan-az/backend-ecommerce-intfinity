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


function defineModels( sequelize ){

    for( let m of Object.keys(models) ){
        const { model, schema } = models[m];
        model.init( schema, model.config( sequelize ) );
    }
    for( let m of Object.keys(models) ){
        const { model } = models[m];
        model.associate( sequelize.models );
    }

}

module.exports = defineModels;