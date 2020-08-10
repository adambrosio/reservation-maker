
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
    db.Users.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      name: req.body.name,
      // dob: req.body.dob
      dob: new Date(Date.now()).toISOString()
    })
    .then(function() {
      res.json({"message": "success!"});
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

    console.log(req.body);

    if(req.body === {})
      return await db.Business.findAll();

    let { business_name, category, city } = req.body;

    // get rid of white space, define as empty string if not defined
    if(business_name) business_name = business_name.trim();
    else business = '';

    if(category) category = category.trim();
    else category = '';
    
    if(city) city = city.trim();
    else city = '';

    // otherwise, do a search with the where
    res.json(await db.Business.findAll({
      where: {
        business_name : {[Op.like] : `%${business_name}%`},
        category : {[Op.like] : `%${category}%` },
        city : { [Op.like] : `%${city}%` }
      }
    })
  );

  });

  // get single business by id
  app.get('/api/business/:id', async function(req, res) {
    res.json(await db.Business.findOne({
      attributes: ['id', 'business_name', 'category', 'street', 'city', 'description', 'ownerId'],
      where: { id : req.params.id }
    })
  );

  });

  // create new business
  app.post('/api/business', async function(req, res) {

    // if (!req.user) {
    //   // The user is not logged in, send back an empty object
    //   res.redirect('/');
    // } else {
      db.Business.create(req.body)
      .then(result => {

        db.BusinessAdmins.create({
          business_id: result.id,
          admin_id: result.ownerId
        });
        res.json(result);
      })
      .catch(err => {
        res.json({'status': 'error', 'message': err});
      });

  });

  // create new business entity
  app.post('/api/business/:id/business_entity', async function(req, res) {

    // The user is not logged in, send back an empty object
    // if (!req.user) {
    //   res.redirect('/');
    // } else {

    console.log(req.body);

      // get business admins
      const business_admin = await db.BusinessAdmins.findAll({
        where: {
          business_id : req.params.id,
          admin_id: req.body.user.id
         }
      });

      console.log(business_admin);

      // if the user is not an admin for that business, reject them
      // if(business_admin.user_id.indexOf(req.user.id) === -1 ){
      //   res.status(403);
      // }

      // they are an admin, create new entity
      // else {

        await db.Business_Entity.create(req.body);

        res.json({'status': 'success'});

      // }
    // }

  });

  // new reservation
  app.post('/api/business/:id/business_entity/:id/reserve', async function(req, res) {

    // ensure user is logged in
    // if (!req.user) {
    //   res.redirect('/');
    // } else {
    req.body.time_start = new Date(Date.now()).toISOString();
    req.body.time_end = new Date(Date.now()).toISOString();
      try {
        res.json(await db.Reservation.create(req.body))
      }
      catch(err) {
        res.json(err).status(404);
      }
    // }

  });

}
