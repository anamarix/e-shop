import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo_yard_sale.svg"

function Login(props) {
  return (
    <div className="login-login">
    <div className="login-form-container">
      <img src={logo}alt="logo" className="login-logo"/>

      <form action="/" className="login-form" >
        <label for="email" className="login-label">Email address</label>
        <input type="text" id="email" placeholder="email@example.com" className="login-input login-input-email"/>

        <label for="password" className="label">Password</label>
        <input type="password" id="password" placeholder="*********" className="login-input login-input-password"/>

        <button type="submit" className="primary-button login-button"><Link to="/">Log in</Link></button>
        <Link to="/email">Forgot my password</Link>
      </form>

      <button className="secondary-button signup-button">Sign up</button>
    </div>
  </div>
  );
}

export default Login;
