'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert(
      'admin',
      [
        {
          name: 'Vanderson Tiago',
          email: 'vandersontpaulo@gmail.com',
          pass: '3d0559a2b72552',
          token: '',
          phone: '(33) 98886-0799',
          position: 2,
          created_at: new Date
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('admin', null, {});
  }
};
