import "./App.css";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import DesktopMenu from "./components/DesktopMenu/DesktopMenu";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import OrderHistory from "./components/OrderHistory/OrderHistory";
import Login from "./components/Login/Login";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import MyAccount from "./components/MyAccount/MyAccount";
import Email from "./components/Email/Email";

function App() {
  const [menuMobileIsOpen, setOpenMenuMobile] = React.useState(false);
  const [menuDesktopIsOpen, setOpenMenuDesktop] = React.useState(false);
  const [shoppingCartIsOpen, setShoppingCartOpen] = React.useState(false);
  const [product, setProduct] = React.useState(null);

  const toggleMenuMobile = () => {
    setOpenMenuMobile((prevState) => !prevState);
  };
  const toggleMenuDesktop = () => {
    setOpenMenuDesktop((prevState) => !prevState);

  };
  const toggleShoppingCart = () => {
    setShoppingCartOpen((prevState) => !prevState);
  };


  return (
    <HashRouter>
    <Navbar
    toggleMenuMobile={toggleMenuMobile}
    toggleMenuDesktop={toggleMenuDesktop}
    toggleShoppingCart={toggleShoppingCart}
    setShoppingCartOpen={setShoppingCartOpen}
    setOpenMenuMobile={setOpenMenuMobile}
  />
    <Routes>
    <Route exact path="/" element={<Main
     menuMobileIsOpen={menuMobileIsOpen}
     renderForMobile={() => (<MobileMenu toggleMenuMobile={toggleMenuMobile} />)}
     menuDesktopIsOpen={menuDesktopIsOpen}
     renderForDesktop={() => (<DesktopMenu toggleMenuDesktop={toggleMenuDesktop}/>)}
     shoppingCartIsOpen={shoppingCartIsOpen}
     renderShoppingCart={()=> (<ShoppingCart toggleShoppingCart={toggleShoppingCart} setOpenMenuMobile={setOpenMenuMobile}/>)}
     renderProduct={()=> (<ProductDetail setProduct={setProduct} product={product}/>)}
     product={product}
     setProduct={setProduct} />} />
   <Route exact path="/orders" element={<OrderHistory/>} />
   <Route exact path="/login" element={<Login/>} />
   <Route exact path="/account" element={<MyAccount/>} />
   <Route exact path="/email" element={<Email renderLoginSite={()=> (<Login />)}/>} />
    </Routes>
    </HashRouter>
  );
}

export default App;
