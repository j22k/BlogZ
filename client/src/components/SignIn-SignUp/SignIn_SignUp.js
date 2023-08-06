import React from 'react';
import createLogo from '../SignIn-SignUp/images/create-logo.png';
import signinLogo from '../SignIn-SignUp/images/sign-in-logo.png';
import '../SignIn-SignUp/SignIn_SignUp.css';

export default function SignInSignUp() {
  return (
    <div className="form_wrapper">
      <form className="form_container login">
      <div className="logo_container">
          <img src={signinLogo} alt="Logo" />
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="login_email_field">
            Email
          </label>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height={24}
            width={24}
            xmlns=""
            className="icon"
          >
            <svg fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fill-rule="evenodd"></path> </g></svg>
            {/* ... SVG path for email icon ... */}
          </svg>
          <input
            placeholder="name@mail.com"
            title="Input title"
            name="input-name"
            type="text"
            className="input_field"
            id="login_email_field"
          />
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="login_password_field">
            Password
          </label>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height={24}
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z" fill="#1C274C"></path> <path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="#1C274C"></path> <path d="M15 2V22" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.7653 19.8915 18.1143 19.99 15 19.9991M12 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H12M15 4.00093C18.1143 4.01004 19.7653 4.10848 20.8284 5.17157C21.4816 5.82475 21.7706 6.69989 21.8985 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
            {/* ... SVG path for password icon ... */}
          </svg>
          <input
            placeholder="Password"
            title="Input title"
            name="input-name"
            type="password"
            className="input_field"
            id="login_password_field"
          />
        </div>
        <button title="Sign In" type="submit" className="sign-in_btn">
          <span>Sign In</span>
        </button>
      </form>
      <form className="form_container signup">
      <div className="logo_container">
          <img src={createLogo} alt="Logo" />
        </div>
        <div className="title_container">
          <p className="title">Create an Account</p>
          <span className="subtitle">
            Get started with our app, just create an account and enjoy the experience.
          </span>
        </div>
        <br />
        <div className="input_container">
          <label className="input_label" htmlFor="signup_name_field">
            Name
          </label>
          
          <input
            placeholder="Your Name"
            title="Input title"
            name="input-name"
            type="text"
            className="input_field"
            id="signup_name_field"
          />
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="signup_email_field">
            Email
          </label>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height={24}
            width={24}
            xmlns=""
            className="icon"
          >
            <svg fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fill-rule="evenodd"></path> </g></svg>
            {/* ... SVG path for email icon ... */}
          </svg>
          {/* ... Add any relevant SVG icon for email field ... */}
          
          <input
            placeholder="name@mail.com"
            title="Input title"
            name="input-name"
            type="text"
            className="input_field"
            id="signup_email_field"
          />
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="signup_password_field">
            Password
          </label><svg
            fill="none"
            viewBox="0 0 24 24"
            height={24}
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z" fill="#1C274C"></path> <path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="#1C274C"></path> <path d="M15 2V22" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.7653 19.8915 18.1143 19.99 15 19.9991M12 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H12M15 4.00093C18.1143 4.01004 19.7653 4.10848 20.8284 5.17157C21.4816 5.82475 21.7706 6.69989 21.8985 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
            {/* ... SVG path for password icon ... */}
          </svg>
          <input
            placeholder="Password"
            title="Input title"
            name="input-name"
            type="password"
            className="input_field"
            id="signup_password_field"
          />
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="signup_confirm_password_field">
            Confirm Password
          </label><svg
            fill="none"
            viewBox="0 0 24 24"
            height={24}
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z" fill="#1C274C"></path> <path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="#1C274C"></path> <path d="M15 2V22" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.7653 19.8915 18.1143 19.99 15 19.9991M12 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H12M15 4.00093C18.1143 4.01004 19.7653 4.10848 20.8284 5.17157C21.4816 5.82475 21.7706 6.69989 21.8985 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
            {/* ... SVG path for password icon ... */}
          </svg>
          <input
            placeholder="Confirm Password"
            title="Input title"
            name="input-name"
            type="password"
            className="input_field"
            id="signup_confirm_password_field"
          />
        </div>
        <button title="Sign Up" type="submit" className="sign-in_btn">
          <span>Sign Up</span>
        </button>
      </form>
    </div>
  );
}
