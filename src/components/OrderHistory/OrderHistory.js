import React from 'react';
import "./OrderHistory.css";
import arrow from "../../images/flechita.svg";
import closeIcon from "../../images/icon_close.png"
import { Link } from 'react-router-dom';

function OrderHistory(props) {
    return (
<div className="my-order">
    <div className="my-order-container">
      <h1 className="title">My orders</h1>

      <div className="my-order-content">
        <Link to="/">
        <div className='my-order-image'>
        <img src={closeIcon} />
        </div>
        </Link>


        <div className="order">
          <p>
            <span>28.03.21</span>
            <span>6 articles</span>
          </p>
          <p>560.00 EUR</p>
          <img src={arrow} alt="arrow"/>
        </div>

        <div className="order">
          <p>
            <span>25.07.21</span>
            <span>3 articles</span>
          </p>
          <p>500.00 EUR</p>
          <img src={arrow} alt="arrow"/>
        </div>

        <div className="order">
          <p>
            <span>30.10.21</span>
            <span>7 articles</span>
          </p>
          <p>875.00 EUR</p>
          <img src={arrow} alt="arrow"/>
        </div>

        <div className="order">
          <p>
            <span>02.01.22</span>
            <span>2 articles</span>
          </p>
          <p> 260.00 EUR</p>
          <img src={arrow}alt="arrow"/>
        </div>
      </div>
    </div>
  </div>
    );
}

export default OrderHistory;