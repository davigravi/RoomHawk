'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references:{model:"Users"},
    },
    roomId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{model:"Rooms"},
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
  Reservation.associate = function(models) {
    // Reservation.belongsTo(models.Room,{foreignKey:"roomId"})
    // Reservation.belongsTo(models.User,{foreignKey:"userId"})
  };
  return Reservation;
};
