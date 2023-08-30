import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import apis from '../api/apis';
import '../components/LoginForm.css'
import { useNavigate } from 'react-router-dom';
export default function NotFound() {
 
  const navigate = useNavigate();
  const [username,setUsername] = useState();
  const [password,setPassword] = useState()
  const [errorMessage, setErrorMessage] = useState('');
  
  const handlesignin = async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post(apis.signIn, {
        username,
        password,
      });
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('token', token); 
        await navigate('/Card');
      }
      else{
        setErrorMessage(response.data)
      }
    } catch (error) {
      if (error.response && error.response.status === 201) {
        setErrorMessage('User already registered');
      } else {
        setErrorMessage('An error occurred');
      }
  }

  }
  return (
    <>
  <meta charSet="UTF-8" />
  <title>CodePen - Animated Login Form using Html &amp; CSS Only</title>
  <link rel="stylesheet" href="./style.css" />
  
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
        <h2>Sign In</h2>
        <form onSubmit={handlesignin}>
        <div className="form">
            {errorMessage && <div className="alert alert-danger custom-error">{errorMessage}</div>}
          <div className="inputBox">
            <input type="text" required="" 
              onChange={(e)=>setUsername(e.target.value)}
            /> <i>Username</i>
          </div>
          <div className="inputBox">
            <input type="password" required="" 
            onChange={(e)=>setPassword(e.target.value)}/> <i>Password</i>
          </div>
          <div className="links">
            {" "}
            <a href="/">Forgot Password</a> <a href="/signup">Signup</a>
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
