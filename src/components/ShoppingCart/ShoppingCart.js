import React from 'react';
import arrow from "../../images/flechita.svg";
import closeIcon from "../../images/icon_close.png";
import bike from "../../images/bike.jpg";
import my_bike from "../../images/my_bike.jpg";
import "./ShoppingCart.css";

function ShoppingCart(props) {
    return (
        <aside className="product-detail" onMouseLeave={()=>props.toggleShoppingCart()}>
        <div className="title-container">
          <img src={arrow} alt="arrow"/>
          <p className="title">My order</p>
        </div>
    
        <div className="my-order-content">
          <div className="shopping-cart">
            <figure>
              <img src={bike} alt="bike"/>
            </figure>
            <p>Bike</p>
            <p>10 450 EUR</p>
            <img src={closeIcon} alt="close"/>
          </div>
    
          <div className="shopping-cart">
            <figure>
              <img src={my_bike} alt="bike"/>
            </figure>
            <p>Bike</p>
            <p>8 900 EUR</p>
            <img src={closeIcon} alt="close"/>
          </div>
    
          {/* <div className="shopping-cart">
            <figure>
              <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
            </figure>
            <p>Bike</p>
            <p>$30,00</p>
            <img src="../icons/icon_close.png" alt="close">
          </div> */}
    
          <div className="order">
            <p>
              <span>Total</span>
            </p>
            <p>19 350 EUR</p>
          </div>
    
          <button className="primary-button">
            Checkout
          </button>
        </div>
      </aside>
    );
}

export default ShoppingCart;