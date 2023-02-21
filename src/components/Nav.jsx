import React, { useState } from 'react'
import Logo from '../assets/burger-logo.png';
import  './Nav.css';

const Nav = () => {
  const [openNavMenu,setOpenNavMenu]=useState(false);
  return (
    <nav className='navbar'>
        <div className="logo">
            <img src={Logo } alt="logo" />
        </div>
        <div className={openNavMenu?"navContainer open":"navContainer"}>
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
        <div className="bx bx-menu" id="menu-icon" onClick={()=>setOpenNavMenu(!openNavMenu)}><i class={!openNavMenu?"ri-menu-3-line":"ri-close-line"}></i></div>
    </nav>
  );
};



export default Nav