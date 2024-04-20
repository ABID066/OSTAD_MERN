import React from 'react';
import { NavLink } from 'react-router-dom';
import "../assets/css/style.css"


const Menu = () => {
    return (
        <div>
            <ul>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/profile/abidTheBrightness/MD ABID">Profile</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/product/10/Soap">Product</NavLink></li>
                
            </ul>
        </div>
    );
};

export default Menu;