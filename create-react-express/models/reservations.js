const { Sequelize, DataTypes } = require('sequelize');
const Business_Entity = require('./business_entities');
const User = require('./users');

module.exports = function(sequelize, DataTypes) {
  const Reservation = sequelize.define('buesiness_entity', {
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

}

Reservation.associate = models => {
  Reservation.hasOne(User, { foreignKey: "id", as: 'user_id', through: User, onDelete('CASCADE')});
  Reservation.hasOne(Business_Entity, { foreignKey: "id", as: 'business_entity_id', through: Business_Entity, onDelete('CASCADE')});
}
