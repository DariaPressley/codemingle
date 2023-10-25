const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment,
          attributes: ['text', 'user_id'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    // TODO: get data for homepage
    // THEN: render homepage
    console.log(req.session.user_id);
    res.render('homepage', { 
      posts,
      logged_in: req.session.logged_in, 
      userId: req.session.user_id
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

router.get('/post', withAuth, (req, res) => {
  // If the user is already logged in, redirect the request to another route
  res.render('create-post');
});

router.get('/profile', withAuth, (req, res) => {
  // If the user is already logged in, redirect the request to user profile
  res.redirect(`/profile/${req.session.user_id}`);
});

router.get('/profile/:id', withAuth, async (req, res) => {
  try {
  const userData = await User.findByPk(req.params.id, {
    attributes: {exclude: ['password']},
    include: [
      {model: Post},
      {model: Comment}
    ]
  });
  const user = userData.get({ plain: true });
  res.render('profile', {
    user,
    logged_in: req.session.logged_in
  })
  } catch (err) {
    res.status(500).json(err);
  }
});
  
module.exports = router;