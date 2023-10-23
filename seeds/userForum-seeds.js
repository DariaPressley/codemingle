const { UserForum } = require('../models');

const userforumdata = [
    {
      "user_id": "2",
      "forum_id": "3"
    },
    {
      "user_id": "1",
      "forum_id": "4"
    }
  ]


const seedUserForums = () => User.bulkCreate(userforumdata);
module.exports = seedUserForum;
  
  