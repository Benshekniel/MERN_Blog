// routes/posts.js
const express = require('express');
const { createPost, getPosts, updatePost, deletePost } = require('../controllers/postController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
   .post(protect, createPost)
   .get(getPosts);

router.route('/:id')
   .put(protect, updatePost)
   .delete(protect, admin, deletePost);

module.exports = router;
