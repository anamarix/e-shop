import "./DesktopMenu.css";
import React from 'react';
import {Link} from 'react-router-dom';

function DesktopMenu(props) {

    return (
        <div className="desktop-menu"  onMouseLeave={()=>props.toggleMenuDesktop()}>
        <ul>
            <li>
                <Link to='/orders' className="title" >My orders</Link>
            </li>
            <li>
                <Link to="/account">My account</Link>
            </li>
            <li>
                <Link to="/login">Sign out</Link>
            </li>
        </ul>
       
    </div>
    );
}

export default DesktopMenu;