
const db = require('../models');
const passport = require('../config/passport');
const dotenv = require('dotenv').config();

const { Op } = require("sequelize");

module.exports = function(app) {

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post('/api/login', passport.authenticate('local'), function(req, res) {
    // user logged in
    // TODO send all user data to front end, store in context api
    // include user data, reservations, owned/admined businessess
    res.status(200);

  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post('/api/signup', function(req, res) {
    db.User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      name: req.body.name,
      dob: req.body.dob
    })
    .then(function() {
      res.status(200);
    })
    .catch(function(err) {
      console.log(err);
      res.status(401);
    });
  });

  // Route for logging user out
  app.get('/logout', function(req, res) {
    req.logout();
    res.status(200);
  });

  // get all businesses
  app.get('/api/business', async function(req, res) {
    return await db.Business.findAll();
  });

  // get all businesses by parameters
  app.get('/api/business', async function(req, res) {

    const { business_name, category, city } = req.body;

    // build out the 'where' constraints for the search
    const where = {};

    // if there are any of the below, add it to the 'where' obj
    if(business_name) where.business_name = { business_name : {[Op.like] : `${business_name}%`} };
    if(category) where.category = { caterogy : category };
    if(city) where.city = { city : { [OP.like] : `${city}` } };

    // if all of the search fields are null, just get all
    if(where === {}) return await db.Business.findAll();

    // otherwise, do a search with the where
    res.json(await db.Business.findAll({
      where: where
    })
  );

  });

  // get single business by id
  app.get('/api/business/:id', async function(req, res) {
    res.json(await db.Business.findOne({
      attributes: ['username', 'name', 'email', 'dob'],
      where: { id : req.params.id }
    })
  );

  });

  // create new business
  app.post('/api/business', async function(req, res) {

    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.redirect('/');
    } else {
      const new_business = await db.Business.create(req.body.business);
      const new_admin = await db.Admin.create( {
        user_id : req.user.id,
        business_id : new_business.id
      });
    }

    res.json(new_business);

  });

  // create new business entity
  app.post('api/business/:id/business_entity', function(req, res) {

    // The user is not logged in, send back an empty object
    if (!req.user) {
      res.redirect('/');
    } else {

      // get business
      const business_admin = await db.Admin.findAll({
        where: { business_id : req.params.id}
      });

      // if the user is not an admin for that business
      if(business_admin.user_id.indexOf(req.user.id) === -1 ){
        res.status(403);
      }

      // they are an admin, create new entity
      else {

        await db.Business_Entity.create(req.body.business_entity);

        res.status(200);

      }
    }

  });

  // new reservation
  app.post('api/business/:id/business_entity/:id', async function(req, res) {

    // ensure user is logged in
    if (!req.user) {
      res.redirect('/');
    } else {
      try {
        await db.Reservation.create(req.body.reservation);
        res.status(200)
      }
      catch(err) {
        res.json(err).status(404);
      }
    }

  });

}
