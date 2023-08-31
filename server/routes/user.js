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
  result = await userHelpers.dosignin(req.body)
  if(result.status){
    console.log(result.user);
    console.log(result);
    const token = jwt.sign({ id: result.user._id,user : result.user.username }, jwtSecret, { expiresIn: '1h' })
    console.log(token);
    res.status(200).json({message : "Loged succesfully",token});
  }
  else{
    console.log(result);
    res.status(201).json(result.message);
  }
})
router.post('/write',async (req,res)=>{
  console.log(req.body);
  result = await userHelpers.dowrite(req.body);
  if(result.status){
    res.status(200).json({message : result.message})
  }
  else{
    res.status(201).json({message : result.message})
  }
})
router.get('/fetchstory',async (req,res)=>{
  result = await userHelpers.dofetch();
  if(result.status){
    res.status(200).json({data : result.datas})
  }
  else{
    res.status(201).json({data : result.datas})
  }
})
module.exports = router;
