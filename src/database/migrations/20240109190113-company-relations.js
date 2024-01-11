'use strict';


const tablesToRelate = [
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

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    for( let { table, schema } of tablesToRelate ){
      await queryInterface.addColumn( table, 'companyId', schema.companyId );
    }
  },

  async down (queryInterface) {
    for( let { table } of [...tablesToRelate].reverse() ){
      await queryInterface.removeColumn( table, 'companyId' );
    }
  },
};
