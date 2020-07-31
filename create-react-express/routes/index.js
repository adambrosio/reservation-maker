var db = require('../models');
var passport = require('../config/passport');
const movie_api_key = 'df49692537d122e8f2ad0279c16b2715';
var dotenv = require('dotenv').config();
var { MovieDb } = require('moviedb-promise');
var moviedb = new MovieDb(movie_api_key);

var { Op } = require("sequelize");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  //
  // app.post('/api/login', passport.authenticate('local'), function(req, res) {
  //
  // });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post('/api/signup', function(req, res) {
    db.User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country
    })
    .then(function() {
      res.status(200).json({'status':'success'});
    })
    .catch(function(err) {
      res.status(401).json(err);
    });
  });

  // Route for logging user out
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  // Route for getting some data about our user to be used client side
  // used to populate the user's profile page
  app.post('/api/user_data', function(req, res) {
    var userData = {};

    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {

      db.User.findOne({
        attributes: ['username', 'createdAt', 'id'],
        where: {
          id: req.body.id
        },
        include: [
          { model: db.User, as: 'followerId', attributes: ['username', 'createdAt', 'id']},

        ]
      })
        .then(function(result) {
          userData = result;

          db.Favorite.findAll({
            where: {
              UserId: req.body.id
            },
            include: [
              { model: db.User, as: 'User' },
            ]
          }).then(function(result) {
            userData.dataValues.favorites = result;
            res.json({
              'user_data': userData
            });
          });
        });
    }
  });

}
