'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const moduleTable = queryInterface.createTable('module', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      doc_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
    });
    return moduleTable;
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('module');
  }
};
