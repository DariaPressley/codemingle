const { Post } = require('../models');

const postdata = [
    {
      "title": "Asking for feedback.",
      "code_block": "/Users/janeadams/Desktop/ucla-bootcamp/projects/codemingle/images/codemingle_screenshot.png",
      "text": "Would love feedback on this!",
      "user_id": 1,
      "likes": 7
    },
    {
      "title": "Look what I made!",
      "code_block": './assets/photos/weather-dashboard.png',
      "text": "Just finished making a weather dashboard.",
      "user_id": 2,
      "likes": 5
    }
  ]


const seedPosts = () => Post.bulkCreate(postdata);
module.exports = seedPosts;
  
