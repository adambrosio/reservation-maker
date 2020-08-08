const { Sequelize, DataTypes } = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const BusinessAdmins = sequelize.define('BusinessAdmins', {});

  return BusinessAdmins;
}
