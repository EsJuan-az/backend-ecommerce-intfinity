'use strict';
const tablesToFixBranch = [
  require('../../models/user.model'),
  require('../../models/purchase.model'),
  require('../../models/refund.model'),
];
const tablesToFixProduct = [
  require('../../models/image.model'),
];
const tablesToFixCategory = [ 
  require('../../models/product.model'),
  require('../../models/image.model'),
];
const tablesToFixCompany = [
  require('../../models/user.model'),
  require('../../models/order.model'),
  require('../../models/product.model'),
  require('../../models/category.model'),
  require('../../models/provider.model'),
  require('../../models/customer.model'),
  require('../../models/branch.model'),
  require('../../models/purchase.model'),
  require('../../models/refund.model'),
  require('../../models/image.model'),
];
const tablesToFixProvider = [
  require('../../models/product.model'),
];
const tablesToFixUser = [
  require('../../models/refund.model'),
  require('../../models/purchase.model'),
  require('../../models/image.model'),
];
const tablesToFixRole = [
  require('../../models/user.model'),
];
const tablesToFixCustomer = [
  require('../../models/order.model'),
];
const tablesToFixPurchase = [
  require('../../models/refund.model'),
];
const listOfChanges = [
  {
    tables: tablesToFixCompany,
    newName: 'company_id',
    oldName: 'companyId',
  },
  {
    tables: tablesToFixBranch,
    newName: 'branch_id',
    oldName: 'branchId',
  },
  {
    tables: tablesToFixRole,
    newName: 'role_id',
    oldName: 'roleId',
  },
  {
    tables: tablesToFixUser,
    newName: 'user_id',
    oldName: 'userId',
  },
  {
    tables: tablesToFixCategory,
    newName: 'category_id',
    oldName: 'categoryId',
  },
  {
    tables: tablesToFixProvider,
    newName: 'provider_id',
    oldName: 'providerId',
  },
  {
    tables: tablesToFixProduct,
    newName: 'product_id',
    oldName: 'productId',
  },
  {
    tables: tablesToFixCustomer,
    newName: 'customer_id',
    oldName: 'customerId',
  },
  {
    tables: tablesToFixPurchase,
    newName: 'purchase_id',
    oldName: 'purchaseId',
  },
];

const changeColumns = async function(qI, data){
  for( let table of data.tables ){
    try{
      await qI.addColumn( table.table, data.newName, table.schema[ data.oldName ] );
    }catch(err){
      //
    }
    try{
      await qI.removeColumn( table.table, data.oldName );
    }catch(err){
      //
    }
  }
};
const resetColumns = async function(qI, data){
  for( let table of data.tables ){
    try{
      await qI.addColumn( table.table, data.oldName, table.schema[ data.oldName ] );
    }catch(err){
      //
    }
    try{
      await qI.removeColumn( table.table, data.newName );
    }catch(err){
      //
    }
  }
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
      for( let changes of listOfChanges ){
        await changeColumns( queryInterface, changes );
      }
  },

  async down (queryInterface) {
    for( let changes of [...listOfChanges].reverse() ){
      await resetColumns( queryInterface, changes );
    }
  },
};
