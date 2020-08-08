const { Sequelize, DataTypes } = require('sequelize');
const Business = require('./businesses');

module.exports = function(sequelize, DataTypes) {
  const Business_Entity = sequelize.define('Business_Entity', {
    business_entity_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  });

  Business_Entity.associate = models => {
    Business_Entity.belongsTo(models.Business, { foreignKey: "id", as: 'business_id', through: models.Business, onDelete:'CASCADE' });
  }

  return Business_Entity;

}
