// controllers/postController.js
const Post = require('../models/Post');

const createPost = async (req, res) => {
   const { title, content } = req.body;
   try {
      const post = await Post.create({ title, content, author: req.user._id });
      res.status(201).json(post);
   } catch (error) {
      res.status(500).json({ message: 'Server error' });
   }
};

const getPosts = async (req, res) => {
   try {
      const posts = await Post.find().populate('author', 'name email');
      res.json(posts);
   } catch (error) {
      res.status(500).json({ message: 'Server error' });
   }
};

const updatePost = async (req, res) => {
   const { id } = req.params;
   const { title, content } = req.body;

   try {
      const post = await Post.findById(id);
      if (!post) {
         return res.status(404).json({ message: 'Post not found' });
      }

      if (post.author.toString() !== req.user._id.toString()) {
         return res.status(401).json({ message: 'Unauthorized action' });
      }

      post.title = title;
      post.content = content;
      await post.save();

      res.json(post);
   } catch (error) {
      res.status(500).json({ message: 'Server error' });
   }
};

const deletePost = async (req, res) => {
   const { id } = req.params;

   try {
      const post = await Post.findById(id);
      if (!post) {
         return res.status(404).json({ message: 'Post not found' });
      }

      if (post.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
         return res.status(401).json({ message: 'Unauthorized action' });
      }

      await post.remove();
      res.json({ message: 'Post removed' });
   } catch (error) {
      res.status(500).json({ message: 'Server error' });
   }
};

module.exports = { createPost, getPosts, updatePost, deletePost };
