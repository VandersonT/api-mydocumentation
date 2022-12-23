'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const systemTable = queryInterface.createTable('system', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      is_active: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      version: {
        allowNull: false,
        type: Sequelize.STRING
      }
    })
    return systemTable;
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('system');
  }
};
