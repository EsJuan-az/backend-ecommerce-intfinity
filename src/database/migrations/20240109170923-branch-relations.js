'use strict';

const tablesToRelate = [
  require('../../models/user.model'),
  require('../../models/purchase.model'),
  require('../../models/refund.model'),
];
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    for( let { table, schema } of tablesToRelate ){
      await queryInterface.addColumn( table, 'branchId', schema.branchId );
    }
  },

  async down (queryInterface) {
    for( let { table } of [...tablesToRelate].reverse() ){
      await queryInterface.removeColumn( table, 'branchId' );
    }
  },
};
