const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { getDatabase } = require('../config/connection');
const userHelpers = require('../helpers/userHelpers');
const { jwtSecret } = require('../config/config');

router.post('/signup', async (req, res) => {

  result = await userHelpers.dosignup(req.body);
  console.log(result);
  console.log(result.status);
  if(result.status){
    res.status(200).json({msg : "registerd succesfully"});
  }
  else{
    console.log(result);
    res.status(400).json(result.message);
  }
  
});

router.post('/signin',async (req,res)=>{
  console.log(req.body);
  user = await userHelpers.dosignin(req.body)
  if(user.status){
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' })
    console.log(token);
    res.status(200).json({message : "Loged succesfully",token});
  }
  else{
    console.log(user);
    res.status(201).json(user.message);
  }
})
module.exports = router;
