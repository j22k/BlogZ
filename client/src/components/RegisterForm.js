import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import '../components/LoginForm.css'
export default function NotFound() {
  const [username,setUsername] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [confirm_password,setConfirmpassword] = useState()

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/user/signup',{username,email,password,confirm_password}).then(result => console.log(result)).catch(err =>console.log(err))
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