'use strict';
const UserData = require('../../models/user.model');
const OrderData = require('../../models/order.model');
const RefundData = require('../../models/refund.model');





/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn( UserData.table, 'roleId', UserData.schema.roleId );
    await queryInterface.addColumn( OrderData.table, 'customerId', OrderData.schema.customerId );
    await queryInterface.addColumn( RefundData.table, 'purchaseId', RefundData.schema.purchaseId );
  },
  async down (queryInterface) {
    await queryInterface.removeColumn( RefundData.table, 'purchaseId' );
    await queryInterface.removeColumn( OrderData.table, 'customerId' );
    await queryInterface.removeColumn( UserData.table, 'roleId' );
  },
};
