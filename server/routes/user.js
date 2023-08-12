const express = require('express');
const router = express.Router();
const { getDatabase } = require('../config/connection');

router.post('/signup', async (req, res) => {
  console.log(req.body);
  const { username, email, password, confirmpassword } = req.body;

  if (password !== confirmpassword) {
    return res.status(400).json({ message: 'Password and confirm password do not match' });
  }
  else{
    try {
      const db = getDatabase();
      const usersCollection = db.collection('users');

      // Check if the user with the same email already exists
      const existingUser = await usersCollection.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User with this email already exists' });
      }

      // Insert the new user into the database
      await usersCollection.insertOne({ username, email, password });

      res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
});

module.exports = router;
