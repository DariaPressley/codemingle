const router = require('express').Router();
const { Comment } = require('../../models');

// Create new comment
router.post('/')

// Delete existing comment
router.delete('/:id')

module.exports = router;