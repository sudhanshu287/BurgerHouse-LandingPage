import React from 'react';
import Nav from './Nav';
import './Header.css';
import headerImage from '../assets/header-burger.png';
const Header = () => {
  return (
    <>
    <Nav/>
    <div className="headerContainer">
        <div className="headerColumnText">
            <div className="dashedBorder">IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS</div>
            <div className="headerBigText">BURGER</div>
            <div className="headerMediumText">WEEK</div>
        </div>
        <div className="headerColumnImage">
            <div className="priceTagBox">
                <div className='priceTag'>
                <div className="price">
                    <span className="priceValue">$5.<span>49</span></span>
                    <div className="priceOnly">ONLY</div>
                </div>
                </div>
            </div>
            <img src={headerImage} alt="header-burger-image" />
        </div>
    </div>
    </>
  )
}

export default Header