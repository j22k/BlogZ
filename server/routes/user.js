const express = require('express');
const router = express.Router();
const { getDatabase } = require('../config/connection');
const userHelpers = require('../helpers/userHelpers');

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
    res.status(200).json({message : "registerd succesfully"});
  }
  else{
    console.log(result);
    res.status(201).json(result.message);
  }
})
module.exports = router;
