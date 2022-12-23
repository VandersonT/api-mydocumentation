'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const doc_viewTable = queryInterface.createTable('doc_view', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      ip: {
        allowNull: false,
        type: Sequelize.STRING
      },
      doc_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
    return doc_viewTable;
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('doc_view');
  }
};
