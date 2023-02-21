import React from 'react';
import './BurgerMenu.css';
import MenuImage from '../assets/sec3-img3.png';
const BurgerMenu = (props) => {
  // console.log('props',props);
  return (
    <div className="burgerMenu">
            <div className="burgerMenuImage">
              <img src={MenuImage} alt="" />
            </div>
            <div className="burgerMenuDetail">
              <h3>Lorem ipsum dolor</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, tenetur!</p>
              <button className='buttonLarge'>ORDER NOW</button>
            </div>
    </div>
  );
}

export default BurgerMenu;