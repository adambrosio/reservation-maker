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
    res.status(200).json({'message': 'success'});

  });

  // return user's reservation data
  app.get('/api/userReservations', async function(req, res) {



    try {
      await db.Reservation.findAll({
        where: {
          user_id: 1
        }
      }).then(async reservations => {

        const user_reservations = [];
        for await( reservation of reservations ) {

          console.log(reservation);

          await db.Business_Entity.findOne({
            where: {
              id: reservation.reserved_entity_id
            }
          }).then(async entity => {

            console.log(entity);

            await db.Business.findOne({
                where: {
                  id: entity.business_id
                }
              }).then(business => {

                console.log(business);

                user_reservations.push({
                  reservation: reservation.dataValues,
                  entity: entity.dataValues,
                  business: business.dataValues
                });

              });

          });


        }
        
        console.log('finished');

        res.json(user_reservations);
      });

    } catch (e) {
      console.log(e);
    }

  });

  // route to get the user data
  app.get('/api/user', async function(req, res) {

    // if (!req.user) {
    //   // The user is not logged in, send back an empty object
    //   res.redirect('/');
    // } else {

    try {
      const userData = await db.Users.findOne({
        where: {
          // id: req.user.id
          id: 1
        },
        attributes: ['id', 'name', 'username', 'dob', 'email']
      });

      if(userData !== []) res.json(userData.dataValues);
      else res.json({'err': 'user not found'});
    }
    catch(e) {
      console.log(e);
    }
    // }

  });



  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post('/api/signup', function(req, res) {

    let { username, password, email, name, dob } = req.body;

    username = username.trim();
    password = password.trim();
    email = email.trim();
    name = name.trim();
    dob = dob.trim();

    db.Users.create({
      username: username,
      password: password,
      email: email,
      name: name,
      // dob: dob
      dob: new Date(Date.now()).toISOString()
    })
    .then(function() {
      res.json({"message": "success!"});
    })
    .catch(function(err) {
      console.log(err);
      res.status(401).json({'error': err});
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
  const business = await db.Business.findOne({
    attributes: ['id', 'business_name', 'category', 'street', 'city', 'description', 'ownerId'],
    where: { id : req.params.id }
  });
  business.userIsAdmin = false;
  if(req.user) {
    const admin = await db.BusinessAdmins.findAll({
      where: {
        business_id : req.params.id,
        admin_id: req.user.id
      }
    });

    if(admin !== [])
    business.userIsAdmin = true;

  }

  res.status(200).json(business);

});

// create new business
app.post('/api/business', async function(req, res) {

  // if (!req.user) {
  //   // The user is not logged in, send back an empty object
  //   res.redirect('/');
  // } else {

  let { business_name, category, street, city, description } = req.body;

  // trim or return an error
  if(business_name) business_name = business_name.trim();
  else res.status(401).json({'err': 'missing business name'});

  if(category) category = category.trim();
  else res.status(401).json({'err': 'missing category'});

  if(street) street = street.trim();
  else res.status(401).json({'err': 'missing street address'});

  if(city) city = city.trim();
  else res.status(401).json({'err': 'missing city'});

  if(description) description = description.trim();

  db.Business.create({
    business_name: business_name,
    category: category,
    street: street,
    city: city,
    description: description
  })
  .then(result => {

    // can take its time, doesn't need to be synced
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

app.put('/api/business/:id', async function(req, res) {

  // if (!req.user) {
  //   // The user is not logged in, send back an empty object
  //   res.redirect('/');
  // } else {

  let { business_name, category, street, city, description } = req.body;

  // trim or return an error
  if(business_name) business_name = business_name.trim();
  else res.status(401).json({'err': 'missing business name'});

  if(category) category = category.trim();
  else res.status(401).json({'err': 'missing category'});

  if(street) street = street.trim();
  else res.status(401).json({'err': 'missing street address'});

  if(city) city = city.trim();
  else res.status(401).json({'err': 'missing city'});

  if(description) description = description.trim();

  // get business admins based on user and business
  const business_admin = await db.BusinessAdmins.findAll({
    where: {
      business_id : req.params.id,
      admin_id: req.body.user.id
    }
  });

  console.log(business_admin);

  // if the user is not an admin for that business, reject them
  if(business_admin = [])
  res.status(403).json({'error': 'unauthorized request'});

  // update based on the above request
  const updatedBusiness = await db.Business.update({
    business_name: business_name,
    category: category,
    street: street,
    city: city,
    description: description
  },{
    where: {
      id: req.params.id
    }
  })

});

// create new business entity
app.post('/api/business/:id/business_entity', async function(req, res) {

  // The user is not logged in, send back an empty object
  // if (!req.user) {
  //   res.redirect('/');
  // } else {

  console.log(req.body);

  if(!(req.body.business_id) || !(req.body.admin_id))
  res.status(401).json({'err': 'incomplete request'})

  // get business admins
  const business_admin = await db.BusinessAdmins.findAll({
    where: {
      business_id : req.params.id,
      admin_id: req.body.user.id
    }
  });

  console.log(business_admin);

  // if the user is not an admin for that business, reject them
  if(business_admin = [])
  res.status(403).json({'error': 'unauthorized request'});

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

  // TODO: remove next 2 lines
  req.body.time_start = new Date(Date.now()).toISOString();
  req.body.time_end = new Date(Date.now()).toISOString();
  try {
    res.json(await db.Reservation.create(req.body))
  }
  catch(err) {
    res.status(404).json({err:err});
  }
  // }

});

}
