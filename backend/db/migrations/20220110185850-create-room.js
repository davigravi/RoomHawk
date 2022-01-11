'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{model:"Users"},
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(1000),
        allowNull:false,
      },
      numberRooms: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      maxGuest: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      hasWifi: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
      },
      hasAc: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
      },
      hasFreeParking: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
      },
      pricePerNight: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      city: {
        type: Sequelize.STRING(50),
        allowNull:false,
      },
      state: {
        type: Sequelize.STRING(50),
        allowNull:false,
      },
      link: {
        type:Sequelize.TEXT,
        allowNull:false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Rooms');
  }
};
