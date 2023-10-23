const { Comment } = require('../models');

const commentdata = [
  {
    "text": "Looks great!",
    "user_id": "2",
    "post_id": "3",
    "likes": "2"
  },
  {
    "text": "Love the styling.",
    "user_id": "3",
    "post_id": "1",
    "likes": "7"
  }
];


const seedComments = () => Comment.bulkCreate(commentdata);
module.exports = seedComments;


