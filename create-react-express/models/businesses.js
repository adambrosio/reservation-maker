const { Sequelize, DataTypes } = require('sequelize');
const User = require('./users');

module.exports = function(sequeslize, DataTypes) {
  const Business = sequelize.define('business', {
    business_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM(['entertainment', 'fitness', 'resturaunt', 'health/beauty', 'maintenance', 'miscellaneous'])
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

}

Business.associate = models => {
  Business.hasOne(User, { foreignKey: "owner_id", as: 'owner_id', through: User, onDelete('SET NULL')});
}
