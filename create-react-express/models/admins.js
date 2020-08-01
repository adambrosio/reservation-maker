const { Sequelize, DataTypes } = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const Admin = sequelize.define('Admin', {});

  Admin.associate = models => {
    Admin.hasOne(models.User, { foreignKey: "id", as: 'user_id', through: models.User, onDelete: 'CASCADE' });
    Admin.hasOne(models.Business, { foreignKey: "id", as: 'business_id', onDelete: 'CASCADE' });
  }

  return Admin;

}
