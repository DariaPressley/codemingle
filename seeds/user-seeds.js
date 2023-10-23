const { User } = require('../models');

const userdata = [
    {
      "name": "Jane",
      "email": "jane@hotmail.com",
      "password": "password123"
    },
    {
      "name": "William",
      "email": "william@gmail.com",
      "password": "password345"
    }
  ]
  

const seedUsers = () => User.bulkCreate(userdata);
module.exports = seedUsers;
  
  