'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const topicTable = queryInterface.createTable('topic', {
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
      content: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      module_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING
      },
      meta_tags: {
        allowNull: false,
        type: Sequelize.STRING
      },
      doc_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
    });
    return topicTable;
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('topic');
  }
};
