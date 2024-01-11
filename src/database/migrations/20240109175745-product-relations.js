'use strict';

const ImageData = require('../../models/image.model');
const tablesToCreate = [
  require('../../models/branch_product.model'),
  require('../../models/order_product.model'),
  require('../../models/purchase_product.model'),
  require('../../models/refund_product.model'),
];
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    await queryInterface.addColumn( ImageData.table, 'productId', ImageData.schema.productId );
    for( let { table, schema } of tablesToCreate ){
      await queryInterface.createTable( table, schema );
    }
  },

  async down (queryInterface) {

    for( let { table } of [...tablesToCreate].reverse() ){
      await queryInterface.dropTable( table );
    }
    await queryInterface.removeColumn( ImageData.table, 'productId');
  },
};
