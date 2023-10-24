const router = require('express').Router();
const { Forum, Post, Comment, UserForum, User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try{
    // TODO: get data for homepage
    // THEN: render homepage
    res.render('homepage', { 
      logged_in: req.session.logged_in 
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

router.get('/post', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  res.render('create-post');
});
  
module.exports = router;