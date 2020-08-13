const { Op } = require("sequelize");
const db = require('../models');

const seed = async () => {

  await db.Users.bulkCreate([
    {
      username: 'abc123',
      password: 'asdfasdf',
      name: 'Allan Charleston',
      email: 'abc123@email.com',
      dob: new Date()
    },
    {
      username: 'def456',
      password: 'asdfasdf',
      name: 'Danielle Finkelton',
      email: 'def456@email.com',
      dob: new Date()
    },
    {
      username: 'ghi789',
      password: 'asdfasdf',
      name: 'Ghisselle Islami',
      email: 'ghi789@email.com',
      dob: new Date()
    },
    {
      username: 'jkl123',
      password: 'asdfasdf',
      name: 'Jon Llamas',
      email: 'jkl123@email.com',
      dob: new Date()
    },
    {
      username: 'mno456',
      password: 'asdfasdf',
      name: 'Matthew Olleyway',
      email: 'mno456@email.com',
      dob: new Date()
    }
  ]);

  await db.Business.bulkCreate([
    {
      business_name: "yestercades",
      category: "entertainment",
      city: "new york",
      state: "New York",
      street: "123 sesame street",
      ownerId: 1
    },
    {
      business_name: "barber shop",
      category: "health/beauty",
      city: "new york",
      state: "New York",
      street: "44 44th street",
      ownerId: 2
    },{
      business_name: "gym",
      category: "fitness",
      city: "new york",
      state: "New York",
      street: "1 23rd street",
      ownerId: 3
    },
  ]);

  await db.BusinessAdmins.bulkCreate([
    {
      business_id: "1",
      admin_id: "1"
    },
    {
      business_id: "2",
      admin_id: "2"
    },
    {
      business_id: "3",
      admin_id: "3"
    }
  ]);

  await db.Business_Entity.bulkCreate([
    {
      business_entity_name: "mario kart",
      description: "racing game",
      business_id: "1"
    },
    {
      business_entity_name: "chair_1",
      description: "reserve a chair",
      business_id: "2"
    },
    {
      business_entity_name: "chair_2",
      description: "reserve a chair",
      business_id: "2"
    },
    {
      business_entity_name: "Personal Training - Marco Polo",
      description: "training session with Marco",
      business_id: "3"
    },
    {
      business_entity_name: "Personal Training with Polo Marco",
      description: "training session with Polo",
      business_id: "3"
    }
  ]);

  await db.Reservation.bulkCreate([
    {
      reserved_entity_id: "2",
      user_id: "1",
      time_start: new Date(),
      time_end: new Date(),
      status:  'reserved'
    },
    {
      reserved_entity_id: "2",
      user_id: "3",
      time_start: new Date(),
      time_end: new Date(),
      status:  'reserved'
    },
    {
      reserved_entity_id: "4",
      user_id: "5",
      time_start: new Date(),
      time_end: new Date(),
      status:  'reserved'
    }
  ]);


}

module.exports = seed;
