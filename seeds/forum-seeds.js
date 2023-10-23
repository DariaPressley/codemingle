const { Forum } = require('../models');

const forumdata = [
  {
    "forum_name": "Javascript"
  },
  {
    "forum_name": "CSS"
  }
];

const seedForums = () => Comment.bulkCreate(forumdata);
module.exports = seedForum;


  
  