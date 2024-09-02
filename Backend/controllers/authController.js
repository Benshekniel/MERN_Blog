// controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
   const { name, email, password } = req.body;

   try {
      const userExists = await User.findOne({ email });
      if (userExists) {
         return res.status(400).json({ message: 'User already exists' });
      }

      const user = await User.create({ name, email, password });
      const token = generateToken(user._id);
      res.status(201).json({ token });
   } catch (error) {
      res.status(500).json({ message: 'Server error' });
   }
};

const loginUser = async (req, res) => {
   const { email, password } = req.body;

   try {
      const user = await User.findOne({ email });
      if (!user) {
         return res.status(400).json({ message: 'Invalid credentials' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
         return res.status(400).json({ message: 'Invalid credentials' });
      }

      const token = generateToken(user._id);
      res.json({ token });
   } catch (error) {
      res.status(500).json({ message: 'Server error' });
   }
};

const generateToken = (id) => {
   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = { registerUser, loginUser };
