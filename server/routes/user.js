const express = require('express');
const router = express.Router();
const { getDatabase } = require('../config/connection');

router.post('/signup', async (req, res) => {
  console.log(req.body);
  console.log('test -1');
  console.log('test 0');
  if (req.body.password != req.body.confirmpassword) {
    console.log('not');
    return res.status(400).json({ message: 'Password and confirm password do not match' });
  }
    try {
      console.log('test 1');
      const db = getDatabase();
      const usersCollection = db.collection('users');
      console.log('test 2');
      // Check if the user with the same email already exists
      const existingUser = await usersCollection.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User with this email already exists' });
      }
      console.log('test 3');
      // Insert the new user into the database
      await usersCollection.insertOne({ username, email, password });

      res.status(201).json({ message: 'Registration successful' });
      console.log('test 4');
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Internal server error' });
      console.log('test 5');
    }
  
});

module.exports = router;
