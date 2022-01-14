'use strict';

const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references:{model:"Users"},
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull:false,
    },
    address: {
      type: DataTypes.STRING(150),
      allowNull:false,
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull:false,
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull:false,
    },
    zipcode: {
      type: DataTypes.STRING(5),
      allowNull:false,
      validate: {
        len: [5, 5]
      },
    },
    numberRooms: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    maxGuest: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    pricePerNight: {
      type: DataTypes.TEXT,
      allowNull:false,
    },
    link: {
      type:DataTypes.TEXT,
      allowNull:false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  Room.associate = function(models) {
    Room.belongsTo(models.User,{foreignKey:"userId"})
  };
  return Room;
};
