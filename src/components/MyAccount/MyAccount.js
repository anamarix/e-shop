import React from "react";
import "./MyAccount.css";
import { Link } from "react-router-dom";

function MyAccount(props) {
  return (
    <div className="login">
      <div className="form-container">
        <h1 className="title">My account</h1>

        <form action="/" className="form">
          <div>
            <label for="name" className="label">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Anna"
              className="input input-name"
            />

            <label for="email" className="label">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="example@example.com"
              className="input input-email"
            />

            <label for="password" className="label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*********"
              className="input input-password"
            />
          </div>
          <Link to="/">
            <input
              type="submit"
              value="Log in"
              className="primary-button login-button"
            />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default MyAccount;
