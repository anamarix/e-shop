import React from 'react';
import "./Main.css";
import bike from "../../images/bike.jpg";
import my_bike from "../../images/my_bike.jpg";
import y_bike from "../../images/y_bike.jpg";
import add_to_cart from "../../images/bt_add_to_cart.svg";


function Main(props) {

const clickHandler = (ev) => {
const src = ev.target.src;
props.setProduct(src)
  }

  
    return (
        <section className="main-container">
            { props.menuMobileIsOpen && props.renderForMobile()}
            {props.menuDesktopIsOpen && props.renderForDesktop()}
            {props.shoppingCartIsOpen && props.renderShoppingCart()}
            {props.product && props.renderProduct()}

        <div className="cards-container">
          <div className="product-card" onClick={(ev)=>clickHandler(ev)}>
            <img disabled
            src={bike}
              alt="bike"
            />
            <div className="product-info">
              <div>
                <p>10 450 EUR</p>
                <p>Bike</p>
              </div>
  
              <figure>
                <img src={add_to_cart} alt="bike" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img onClick={(ev)=>clickHandler(ev)}
            src={my_bike}
              alt="bike"
            />
            <div className="product-info">
              <div>
                <p>9 800 EUR</p>
                <p>Bike</p>
              </div>
  
              <figure>
                <img src={add_to_cart} alt="bike" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img onClick={(ev)=>clickHandler(ev)}
            src={y_bike}
              alt="bike"
            />
            <div className="product-info">
              <div>
                <p>7 550 EUR</p>
                <p>Bike</p>
              </div>
  
              <figure>
                <img src={add_to_cart} alt="bike" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img onClick={(ev)=>clickHandler(ev)}
            src={my_bike}
              alt="bike"
            />
            <div className="product-info">
              <div>
                <p>11 000 EUR</p>
                <p>Bike</p>
              </div>
  
              <figure>
                <img src={add_to_cart} alt="bike" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img onClick={(ev)=>clickHandler(ev)}
            src={bike}
              alt="bike"
            />
            <div className="product-info">
              <div>
                <p>9 800 EUR</p>
                <p>Bike</p>
              </div>
  
              <figure>
                <img src={add_to_cart} alt="bike" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img onClick={(ev)=>clickHandler(ev)}
            src={y_bike}
              alt="bike"
            />
            <div className="product-info">
              <div>
                <p>6 820 EUR</p>
                <p>Bike</p>
              </div>
  
              <figure>
                <img src={add_to_cart} alt="bike" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img onClick={(ev)=>clickHandler(ev)}
            src={my_bike}
              alt="bike"
            />
            <div className="product-info">
              <div>
                <p>7 750 EUR</p>
                <p>Bike</p>
              </div>
  
              <figure>
                <img src={add_to_cart} alt="bike" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img onClick={(ev)=>clickHandler(ev)}
            src={y_bike}
              alt="bike"
            />
            <div className="product-info">
              <div>
                <p>10 000 EUR</p>
                <p>Bike</p>
              </div>
  
              <figure>
                <img src={add_to_cart} alt="bike" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img onClick={(ev)=>clickHandler(ev)}
            src={bike}
              alt="bike"
            />
            <div className="product-info">
              <div>
                <p>9 100 EUR</p>
                <p>Bike</p>
              </div>
  
              <figure>
                <img src={add_to_cart} alt="bike" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img onClick={(ev)=>clickHandler(ev)}
            src={my_bike}
              alt="bike"
            />
            <div className="product-info">
              <div>
                <p>12 600 EUR</p>
                <p>Bike</p>
              </div>
  
              <figure>
                <img src={add_to_cart} alt="bike" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img onClick={(ev)=>clickHandler(ev)}
            src={bike}
              alt="bike"
            />
            <div className="product-info">
              <div>
                <p>8 500 EUR</p>
                <p>Bike</p>
              </div>
  
              <figure>
                <img src={add_to_cart} alt="bike" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img onClick={(ev)=>clickHandler(ev)}
            src={y_bike}
              alt="bike"
            />
            <div className="product-info">
              <div>
                <p>7 400 EUR</p>
                <p>Bike</p>
              </div>
  
              <figure>
                <img src={add_to_cart} alt="bike" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img onClick={(ev)=>clickHandler(ev)}
            src={bike}
              alt="bike"
            />
            <div className="product-info">
              <div>
                <p>9 000 EUR</p>
                <p>Bike</p>
              </div>
  
              <figure>
                <img src={add_to_cart} alt="bike" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img onClick={(ev)=>clickHandler(ev)}
            src={y_bike}
              alt="bike"
            />
            <div className="product-info">
              <div>
                <p>10 900 EUR</p>
                <p>Bike</p>
              </div>
  
              <figure>
                <img src={add_to_cart} alt="bike" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img onClick={(ev)=>clickHandler(ev)}
            src={my_bike}
              alt="bike"
            />
            <div className="product-info">
              <div>
                <p>8 500 EUR</p>
                <p>Bike</p>
              </div>
  
              <figure>
                <img src={add_to_cart} alt="bike" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img onClick={(ev)=>clickHandler(ev)}
            src={bike}
              alt="bike"
            />
            <div className="product-info">
              <div>
                <p>6 400 EUR</p>
                <p>Bike</p>
              </div>
  
              <figure>
                <img src={add_to_cart} alt="bike" />
              </figure>
            </div>
          </div>
          <div className="product-card">
            <img onClick={(ev)=>clickHandler(ev)}
            src={my_bike}
              alt="bike"
            />
            <div className="product-info">
              <div>
                <p>10 400 EUR</p>
                <p>Bike</p>
              </div>
  
              <figure>
                <img src={add_to_cart} alt="bike" />
              </figure>
            </div>
          </div>
          
        </div>
      </section>
    );
}

export default Main;