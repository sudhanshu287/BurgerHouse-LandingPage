import React from 'react'
import './Footer.css';
import FooterImg from '../assets/footer-img.png';
import FooterLogo from '../assets/burger-logo.png'
const Footer = () => {
  return (
    <footer className="footerContainer">
        <div className="footerInfo">
            <div className="footerLogo">
                <div className="whiteLogo">
                    <img src={FooterLogo} alt="" />
                </div>
                <div className="footerText">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam eaque asperiores, et error voluptatem sed consequatur quia repudiandae delectus dolores voluptatibus illo. Perspiciatis quibusdam incidunt voluptates quidem! Magni, sint!</p>
                </div>
            </div>
            <div className="footerAdress">
                <div className="areaAdress">
                <i class="ri-map-pin-2-fill"></i> <span>MAIN ROAD, BUILDING NAME, COUNTRY</span>
                </div>
                <div className="emailAdress">
                <i class="ri-mail-fill"></i> <span>INFO@COMPANYNAME.COM</span>
                </div>
            </div>
        </div>
        
        <div className="copyrightContainer">
            <div className="copyrightText">
                <p>&#169; COPYRIGHT 2023 ALL RIGHT RESERVED </p>
            </div>
            <div className="author">
            <p>MADE WITH &#10084;&#65039; BY <a href="https://www.linkedin.com/in/sudhanshu123/">SUDHANSHU PATEL</a></p>
            </div>
            <div className="socialIcon">
            <a href=""><i class="ri-facebook-fill"></i></a>
            <a href=""><i class="ri-instagram-fill"></i></a>
            <a href=""><i class="ri-twitter-fill"></i></a>
            <a href=""><i class="ri-whatsapp-fill"></i></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer