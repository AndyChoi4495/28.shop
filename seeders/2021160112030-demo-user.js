'use strict';
const numeral = require('numeral');
const bcrypt = require('bcrypt')
const {
  BCRYPT_salt: salt,
  BCRYPT_round: round
} = process.env;
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const insertUsers = [];
    insertUsers.push({
      userid: 'yun4495',
      userpw: await bcrypt.hash('111111' + salt, Number(round)),
      username: '최고관리자',
      email: 'yun4495@gmail.com',
      tel: '010-7777-1111',
      addrPost: '1234',
      addrRoad: '서울시 마포구 노고산로',
      addrJibun: '서울시 마포구 창천동',
      addrComment: '(창천동)',
      addrDetail: '7층',
      status: '9',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    for (let i = 0; i < 99; i++) {
      insertUsers.push({
        userid: 'test' + i,
        userpw: await bcrypt.hash('111111' + salt, Number(round)),
        username: '테스트유저' + i,
        email: 'test' + i + '@test.com',
        tel: `010-7777-${numeral(i).format('0000')}`,
        addrPost: String(10000 + i),
        addrRoad: '서울시 마포구 노고산로',
        addrJibun: '서울시 마포구 창천동',
        addrComment: '(창천동)',
        addrDetail: 1 + i + '층',
        status: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert('User', insertUsers);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User', null, {});
  },
};