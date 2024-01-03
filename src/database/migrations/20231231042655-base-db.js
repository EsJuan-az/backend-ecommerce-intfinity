'use strict';

const UserData = require('../../models/user.model');
const OrderData = require('../../models/order.model');
const ProductData = require('../../models/product.model');
const OrderProductData = require('../../models/order_product.model');
const CategoryData = require('../../models/category.model');
const CompanyData = require('../../models/company.model');
const ProviderData = require('../../models/provider.model');
const ImageData = require('../../models/image.model');
const RoleData = require('../../models/role.model');
const CustomerData = require('../../models/customer.model');
const BranchData = require('../../models/branch.model');
const BranchProductData = require('../../models/branch_product.model');
const PurchaseData = require('../../models/purchase.model');
const PurchaseProductData = require('../../models/purchase_product.model');
const RefundData = require('../../models/refund.model');
const RefundProductData = require('../../models/refund_product.model');

const datapack = [
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


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const creationPromises = datapack.map( ({schema, table}) => {
      return queryInterface.createTable( table, schema );
    });
    await Promise.all( creationPromises );

  },

  async down (queryInterface, Sequelize) {
    const deletionPromises = datapack.map( ({table}) => {
      queryInterface.dropTable( table );
    });
    await Promise.all( deletionPromises );

  }
};
