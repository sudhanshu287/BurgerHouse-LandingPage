import React from 'react'
import './Upcoming.css';
import Img from '../assets/sec4-img.png'
const Upcoming = () => {
  return (
    <section className="upcomingContainer">
        
            <div className="left">
                <p>DISCOVER</p>
                <h3>UPCOMING EVENTS</h3>
                <p className='upcomingSubTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Illum similique obcaecati vitae modi officia corporis incidunt sunt non, fugiat voluptates odit quibusdam molestiae, saepe  commodi ipsum nesciunt ad veniam iste exped rerum aliquam. Unde vero labore ex tempora culpa asperiores?</p>
            </div>
            <div className="right">
                <img src={Img} alt="" />
            </div>
        
    </section>
  )
}

export default Upcoming