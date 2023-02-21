import React from 'react'
import Logo from '../assets/burger-logo.png';
import  './Nav.css';

const Nav = () => {
  return (
    <nav className='navbar'>
        <div className="logo">
            <img src={Logo } alt="logo" />
        </div>
        <div className="navContainer">
            <div className="deliveryNumber">
            <div><i class="ri-e-bike-2-fill"></i></div>
            <div>Express Delivery +1234567890</div>
            </div>
            <ul className="navList">
                <li><a href="">Home</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Our Story</a></li>
                <li><a href="">contact us</a></li>
                
            </ul>
            
        </div>
        <div className="bx bx-menu" id="menu-icon"><i class="ri-menu-3-line"></i></div>
    </nav>
  );
};



export default Nav