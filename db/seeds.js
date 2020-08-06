const { Op } = require("sequelize");
const db = require('../models');

db.Users.bulkCreate([
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
