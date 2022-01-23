import React from 'react';
import "./MobileMenu.css";
import { Link } from 'react-router-dom';

function MobileMenu(props) {
    return (
<div className="mobile-menu"  onMouseLeave={()=>props.toggleMenuMobile()}>
    <ul >
      <li>
        <a href="/">CATEGORIES</a>
      </li>
      <li>
        <a href="/">All</a>
      </li>
      <li>
        <a href="/">Clothes</a>
      </li>
      <li>
        <a href="/">Electronics</a>
      </li>
      <li>
        <a href="/">Furnitures</a>
      </li>
      <li>
        <a href="/">Toys</a>
      </li>
      <li>
        <a href="/">Other</a>
      </li>
    </ul>

    <ul>
      <li>
        <Link to="/orders">My orders</Link>
      </li>
      <li>
        <Link to="/account">My account</Link>
      </li>
    </ul>

    <ul>
      <li>
        <a href="/" className="email">ania@example.com</a>
      </li>
      <li>
        <Link to="/login" className="sign-out">Sign out</Link>
      </li>
    </ul>
  </div>
    );
}

export default MobileMenu;