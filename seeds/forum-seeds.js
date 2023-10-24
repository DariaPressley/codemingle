const { Forum } = require('../models');

const forumdata = [
  {
    "forum_name": "Javascript"
  },
  {
    "forum_name": "CSS"
  }
];

const seedForums = () => Forum.bulkCreate(forumdata);
module.exports = seedForums;


  
  