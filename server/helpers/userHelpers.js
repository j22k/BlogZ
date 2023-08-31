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

          const user ={}
          user.username = userData.username
          user.email = userData.email
          user.password = userData.password
          const response = await db.collection(collections.USER).insertOne(user);

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

      dosignin : async (userData) =>{
        try {
          const db = getDatabase();
          const user = await db.collection(collections.USER).findOne({ username: userData.username });
    
          if (!user) {
            return { status: false, message: 'Invalid username ' };
          }
    
          const matched = await bcrypt.compare(userData.password, user.password);
    
          if (matched) {
            delete user.password;
            console.log("User found");
            return { status: true, user: user };
          } else {
            return { status: false, message: 'Invalid password' };
          }
        } catch (err) {
          console.log(err);
          throw new Error('Unable to sign in');
        }
      },
      dowrite : async (writeData) =>{
        try {
          const db = getDatabase();

          const existingStory = await db.collection(collections.STORY).findOne({story : writeData.story});
          if (existingStory) {
            return {status : false ,message : "This Story already exist"};
          }

          writeData.date = new Date();
          writeData.likes = 0;
         

          const storyResponse = await db.collection(collections.STORY).insertOne(writeData);
    
          if (storyResponse.acknowledged) {
            console.log('Stroy writed successfully');
            return {status : true,message :'New stroy added'};
          } else {
            console.log("Couldn't add new Story somthing went wrong");
            return {status : false,message : "Couldn't add new Story somthing went wrong"};
          }
        } catch (err) {
          console.log(err);
          return {status : false,message : err};
        }
      },
      dofetch : async () =>{
        try {
          const db = getDatabase();

          const fetchPost = await db.collection(collections.STORY).find({},
             { 
              projection:{ id: 1,user : 1, title: 1, story: 1, date: 1, likes: 1 },
               sort: { date: -1 } 
              }).toArray();
          if(fetchPost){
            return {status : true,datas : fetchPost};
          }
          else{
            return {status : false,datas :"couldn't fetch Posts"};
          }

        } catch (err) {
          console.log(err);
          return {status : false,message : err};
        }
      }
}