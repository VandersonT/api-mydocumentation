'use strict';

const { type } = require('os');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const mediaTable = queryInterface.createTable('media', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      alternative_text: {
        allowNull: false,
        type: Sequelize.STRING
      },
      author: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
    return mediaTable;
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('media');
  }
};
