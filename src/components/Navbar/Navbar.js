import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import menu from "../../images/icon_menu.svg";
import logo from "../../images/logo_yard_sale.svg";
import shopping_cart from "../../images/icon_shopping_cart.svg";

const Navbar = (props) => {
  const menuHandler = () => {
    props.setShoppingCartOpen(false);
    props.toggleMenuMobile();
  };

  const shoppingCartHandler = () => {
    props.setOpenMenuMobile(false);
    props.toggleShoppingCart();
  };

  return (
    <nav>
      <img
        src={menu}
        alt="menu"
        className="menu"
        onClick={() => menuHandler()}
      />

      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="logo" className="main-logo" />
        </Link>

        <ul>
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
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li
            className="navbar-email"
            onMouseEnter={() => props.toggleMenuDesktop()}
          >
            ania@example.com
          </li>
          <li className="navbar-shopping-cart">
            <img
              src={shopping_cart}
              alt="shopping cart"
              onMouseEnter={() => shoppingCartHandler()}
            />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
