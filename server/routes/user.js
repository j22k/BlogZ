const express = require('express');
const router = express.Router();
const { getDatabase } = require('../config/connection');
const userHelpers = require('../helpers/userHelpers');

router.post('/signup', async (req, res) => {
  console.log(req.body);

  result = await userHelpers.dosignup(req.body);
  console.log(result);
  if(result.status){
    res.sendStatus(200).json("registerd succesfully");
  }
  else{
    console.log(result);
    res.sendStatus(400).json(result.message);
  }
  
});

module.exports = router;
