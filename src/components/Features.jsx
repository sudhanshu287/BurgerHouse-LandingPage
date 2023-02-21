import React from 'react';
import './Features.css';
import ImgOne from '../assets/sec2-img1.png';
import ImgTwo from '../assets/sec2-img2.png';
import ImgThree from '../assets/sec2-img3.png';
const Features = () => {
    return (
        <section className='featuresContainer'>
            <div className="imageColumnFirst">
                <img src={ImgOne} alt="" />
                <div className='floatingTextBox'>
                    <div className="floatingText">
                        <div className="floatingTextSmall">TRY IT TODAY</div>
                        <div className="floatingTextBig">MOST POPULAR</div>
                        <div className="floatingTextBig">BURGER</div>
                    </div>
                </div>
            </div>
            <div className="imageColumnSecond">
                <img src={ImgTwo} alt="" />
                <div className='floatingTextBox'>
                    <div className="floatingText">
                        <div className="floatingTextSmall">TRY IT TODAY</div>
                        <div className="floatingTextBig">MORE FUN</div>
                        <div className="floatingTextBig">MORE TASTE</div>
                    </div>
                </div>
            </div>
            <div className="imageColumnThird">
                <img src={ImgThree} alt="" />
                <div className='floatingTextBox'>
                    <div className="floatingText">
                        <div className="floatingTextSmall">TRY IT TODAY</div>
                        <div className="floatingTextBig">FRESH & CHILL</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features