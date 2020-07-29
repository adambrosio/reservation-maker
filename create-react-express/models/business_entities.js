const { Sequelize, DataTypes } = require('sequelize');
const Business = require('./businesses');

module.exports = function(sequeslize, DataTypes) {
  const Business_Entity = sequelize.define('buesiness_entity', {
    business_entity_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  });

}

Business_Entity.associate = models => {
  Business_Entity.hasOne(User, { foreignKey: "business_id", as: 'business_id', through: Business, onDelete('CASCADE')});
}
