'use strict';
const { DataTypes } = require("sequelize");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Reservations",
      [
        {
          userId: 1,
          roomId: 3,
          startDate: new Date(),
          endDate: new Date(),
          totalPrice: 350,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          roomId: 1,
          startDate: new Date(),
          endDate: new Date(),
          totalPrice: 178,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          roomId: 3,
          startDate: new Date(),
          endDate: new Date(),
          totalPrice: 243,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Reservations', null, {});
  }
};
