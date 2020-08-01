const { Sequelize, DataTypes } = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const Business = sequelize.define('Business', {
    business_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM(['entertainment', 'fitness', 'resturaunt', 'health/beauty', 'maintenance', 'miscellaneous']),
      allowNull: false
    },
    street: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  });

  Business.associate = models => {
    Business.hasOne(models.Users);
  }

  return Business;

}
