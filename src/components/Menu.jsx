import React from 'react';
import BurgerMenu from './BurgerMenu';
import './Menu.css';
import BurgerImgOne from '../assets/sec3-img1.png';
import BurgerImgTwo from '../assets/sec3-img3.png';
import BurgerImgThree from '../assets/sec3-img2.png';

const Menu = () => {
  return (
    <section className="menuContainer">
      <div className="menuText">
          <p>ALWAYS TASTY BURGER</p>
      </div>
      <div className="sectionTitle">
        <h2>CHOOSE & ENJOY</h2>
      </div>
      <p className="sectionSubTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quisquam, ad officia eos unde ab neque dolorem quia iste nam? Lorem ipsum dolor sit amet.</p>
      <div className="burgerMenuContainer">
        <BurgerMenu image={BurgerImgOne} />
        <BurgerMenu image={BurgerImgTwo}/>
        <BurgerMenu image={BurgerImgThree}/>
      </div>
    </section>
  )
}

export default Menu