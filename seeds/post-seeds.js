const { Post } = require('../models');

const postdata = [
    {
      "title": "Asking for feedback.",
      "code_block": "",
      "text": "Would love feedback on this!",
      "user_id": 1,
      "forum_id": 1,
      "likes": 5
    },
    {
      "title": "Look what I made!",
      "code_block": "",
      "text": "Just finished making a weather dashboard.",
      "user_id": 2,
      "forum_id": 2,
      "likes": 5
    }
  ]


const seedPosts = () => Post.bulkCreate(postdata);
module.exports = seedPosts;
  
  