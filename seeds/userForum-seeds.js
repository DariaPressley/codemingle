const { UserForum } = require('../models');

const userforumdata = [
    {
      "user_id": 2,
      "forum_id": 1
    },
    {
      "user_id": 1,
      "forum_id": 2
    }
  ]


const seedUserForums = () => UserForum.bulkCreate(userforumdata);
module.exports = seedUserForums;
  
  