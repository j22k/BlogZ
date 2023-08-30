import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import apis from '../api/apis';
import '../styles/LoginForm.css';
import {useNavigate } from 'react-router-dom';
export default function NotFound() {

  const navigate = useNavigate();
  const [username,setUsername] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [confirmPassword,setConfirmpassword] = useState()
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(apis.signUp, {
        username,
        email,
        password,
        confirm_password: confirmPassword,
      });

      if (response.status === 200) {
        await navigate('/login');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage('User already registered');
      } else {
        setErrorMessage('An error occurred');
      }
    }
   }
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
            {errorMessage && <div className="alert alert-danger custom-error">{errorMessage}</div>}
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
            {" "}<a href="/login">Signin</a>
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