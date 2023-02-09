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
          pass: '3d1b59a2b762508b06f3',
          token: 'co5gvrg1d1wwfar8819kppfwppb9l95jx8anygdozibz7yhfxgmd8lcfwotyp5awkwl3iwf65wu6or64fsrgfu74dfo4brkqsjzy63nocjrle5og28l40g4lgw5sbogsett7f8oh81ozwxaf6261kibfhyusze9l590whpdyye61dzehbzegtthqj6e028mlrdnl6xpc1lcj',
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
