const { Sequelize, DataTypes } = require('sequelize');
const Business_Entity = require('./business_entities');
const User = require('./users');

module.exports = function(sequelize, DataTypes) {
  const Reservation = sequelize.define('Reservation', {
    reserved_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    time_start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    time_end: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  return Reservation;

}
