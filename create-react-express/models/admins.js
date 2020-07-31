const { Sequelize, DataTypes } = require('sequelize');
const Business = require('./businesses');
const User = require('./users');

module.exports = function(sequelize, DataTypes) {
  const Admin = sequelize.define('buesiness_entity', {});

}

Admin.associate = models => {
  Admin.hasOne(User, { foreignKey: "id", as: 'user_id', through: User, onDelete('CASCADE')});
  Admin.hasOne(Business, { foreignKey: "id", as: 'business_id', through: Business, onDelete('CASCADE')});
}
