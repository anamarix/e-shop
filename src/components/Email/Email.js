import React from 'react';
import logo from "../../images/logo_yard_sale.svg";
import email from "../../images/email.svg";
import "./Email.css";
import { Link } from 'react-router-dom';


function Email(props) {


    return (
<div className="email-login">
        <div className="email-form-container">
            <img src={logo} alt="logo" className="email-logo" />
            <h1 className="email-title">Email has been sent!</h1>
            <p className="email-subtitle">Please check your inbox for instructions on how to reset the password</p>
            <div className="email-image">
                <img src={email} alt=""/>
            </div>
    
            <button className="email-primary-button email-login-button"><Link to="/login">Login</Link></button>
            <p className="resend"> 
               <span>Didn't receive the email?</span>
               <a href="/">Resend</a>
            </p>
        </div>
    </div>

    );
}

export default Email;