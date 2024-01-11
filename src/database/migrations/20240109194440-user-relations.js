'use strict';
const tablesToRelate = [
  require('../../models/refund.model'),
  require('../../models/purchase.model'),
  require('../../models/image.model'),
];
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    for( let { table, schema } of tablesToRelate ){
      await queryInterface.addColumn( table, 'userId', schema.userId );
    }
  },

  async down (queryInterface) {
    for( let { table } of [...tablesToRelate].reverse() ){
      await queryInterface.removeColumn( table, 'userId' );
    }
  },
};
