import React from 'react';
import closeIcon from "../../images/icon_close.png";
import addToCart from "../../images/bt_add_to_cart.svg";
import bike from "../../images/bike.jpg";
import './ProductDetail.css'

function ProductDetail(props) {
    return (
      <div className='aside-container'>
        <aside className="aside-product-detail">
        <div className="aside-product-detail-close">
          <img src={closeIcon} alt="close" onClick={()=>props.setProduct(null)}/>
        </div>
        <img src={props.product} alt="bike"/>
        <div className="aside-product-info">
          <p>3500,00 EUR</p>
          <p>Bike</p>
          <p>With its practical position, this bike also fulfills a decorative function.</p>
          <button className="primary-button add-to-cart-button" >
            <img src={addToCart}alt="add to cart"/>
            Add to cart
          </button>
        </div>
      </aside>
      </div>

    );
}

export default ProductDetail;