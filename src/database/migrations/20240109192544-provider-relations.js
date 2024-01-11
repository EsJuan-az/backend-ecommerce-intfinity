'use strict';
const ProductData = require('../../models/product.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn( ProductData.table, 'providerId', ProductData.schema.providerId );
  },

  async down (queryInterface) {
      await queryInterface.removeColumn( ProductData.table, 'providerId');
  },
};
