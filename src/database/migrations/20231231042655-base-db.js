'use strict';

const UserData = require('../../models/user.model');
const OrderData = require('../../models/order.model');
const ProductData = require('../../models/product.model');
const CategoryData = require('../../models/category.model');
const CompanyData = require('../../models/company.model');
const ProviderData = require('../../models/provider.model');
const ImageData = require('../../models/image.model');
const RoleData = require('../../models/role.model');
const CustomerData = require('../../models/customer.model');
const BranchData = require('../../models/branch.model');
const PurchaseData = require('../../models/purchase.model');
const RefundData = require('../../models/refund.model');

const datapack = [
  CompanyData,
  BranchData,
  RoleData,
  UserData,
  CustomerData,
  OrderData,
  CategoryData,
  ProviderData,
  ProductData,
  PurchaseData,
  RefundData,
  ImageData,
];


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    for( let { table, schema, model } of datapack ){
      await queryInterface.createTable( table, schema, model.config() );
    }
  },

  async down (queryInterface) {
    for( let { table } of [...datapack].reverse() ){
      await queryInterface.dropTable( table );
    }
  },
};
