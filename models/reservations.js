const { Sequelize, DataTypes } = require('sequelize');
const Business_Entity = require('./business_entities');
const User = require('./users');

module.exports = function(sequelize, DataTypes) {
  const Reservation = sequelize.define('Reservation', {
    reservation_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    time_start: {
      type: DataTypes.TIME,
      allowNull: false
    },
    time_end: {
      type: DataTypes.TIME,
      allowNull: false
    }
  });

  Reservation.associate = models => {
    Reservation.hasOne(models.Users, { foreignKey: "id", as: 'user_id', through: models.Users, onDelete: 'CASCADE' });
    Reservation.hasOne(models.Business_Entity, { foreignKey: "id", as: 'business_entity_id', through: models.Business_Entity, onDelete: 'CASCADE' });
  }

  return Reservation;

}
