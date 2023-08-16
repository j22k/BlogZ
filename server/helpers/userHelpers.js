const { response } = require('express');
const collections = require('../config/collections');
const { getDatabase } = require('../config/connection');
const db = require('../config/connection');
const bcrypt = require('bcrypt');

module.exports = {
    dosignup: async (userData) => {
        var status = false;
        if (userData.password != userData.confirm_password){
            return {status : false ,message : "password not match"};
        }
        try {
          const db = getDatabase();

          const salt = await bcrypt.genSalt(10);
          const hashpass = await bcrypt.hash(userData.password, salt);
          userData.password = hashpass;
    
          const existingUser = await db.collection(collections.USER).findOne({email : userData.email});
          if (existingUser) {
            return {status : false ,message : "User already exist"};
          }

          
          const response = await db.collection(collections.USER).insertOne(userData);

          if (response.acknowledged) {
            console.log('New account for user created successfully');
            return {status : true};
          } else {
            console.log("Couldn't create account");
            return {status : true};
          }
        } catch (err) {
          console.log(err);
          return {status : false , err}
        }
      },
}