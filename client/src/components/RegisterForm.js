import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import apis from '../api/apis';
import '../components/LoginForm.css';
import { Navigate, useNavigate } from 'react-router-dom';
export default function NotFound() {

  const [username,setUsername] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [confirm_password,setConfirmpassword] = useState()

  const handleSubmit = async(e)=>{
    try {
      const response = await axios.post(apis.signUp, {
        username,
        email,
        password,
        confirm_password,
      });
      console.log(response.data); 
      console.log(response.status);// Assuming the server sends a response message
      // Redirect to the login page after successful registration
      // Navigate('/login');
    } catch (error) {
      console.log(error);
    } }
  return (

    <>
  {/* <meta charSet="UTF-8" />
  <title>CodePen - Animated Login Form using Html &amp; CSS Only</title>
  <link rel="stylesheet" href="./style.css" /> */}
  
  <section>
    {" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span />
    <div className="signin">
      <div className="content">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
        <div className="form">
          <div className="inputBox">
            <input type="text" required="" 
              onChange={(e)=>setUsername(e.target.value)}
            /> <i>Username</i>
          </div>
          <div className="inputBox">
            <input type="e-mail" required="" 
              onChange={(e)=>setEmail(e.target.value)}
              /> <i>Email</i>
          </div>
          <div className="inputBox">
            <input type="password" required="" 
              onChange={(e)=>setPassword(e.target.value)}
            /> <i>Password</i>
          </div>
          <div className="inputBox">
            <input type="password" required="" 
              onChange={(e)=>setConfirmpassword(e.target.value)}
            /> <i>Confirm Password</i>
          </div>
          <div className="links">
            {" "}
            <a href="#">Forgot Password</a><a href="/login">Signin</a>
          </div>
          <div className="inputBox">
            <input type="submit" defaultValue="Login" />
          </div>
        </div>
        </form>
      </div>
    </div>
  </section>{" "}
  
</>

  )
}