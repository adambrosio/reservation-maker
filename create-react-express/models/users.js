// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require('bcryptjs');
const Business = require('./businesses');

// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('user', {
    // The email cannot be null, and must be a proper email before creation
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },

});
// through: models.Follow,
User.associate = models => {
  User.belongsToMany(models.Business, { through: models.Business });

}

// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
User.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

// has password
User.addHook('beforeCreate', function(user) {
  user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
});

return User;
};
