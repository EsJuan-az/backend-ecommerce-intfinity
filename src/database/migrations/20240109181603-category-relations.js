'use strict';

const tablesToRelate = [ 
  require('../../models/product.model'),
  require('../../models/image.model'),
];
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    for( let { table, schema } of tablesToRelate ){
      await queryInterface.addColumn( table, 'categoryId', schema.categoryId );
    }

  },

  async down (queryInterface) {
    for( let { table } of [...tablesToRelate].reverse() ){
      await queryInterface.removeColumn( table, 'categoryId' );
    }
  },
};
