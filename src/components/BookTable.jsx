import React from 'react'
import './BookTable.css';
import BurgerImg from '../assets/sec5-burger.png';
import BottleImg from '../assets/sec5-bottle.png';
import PlateImg from '../assets/sec5-plate.png';
const BookTable = () => {
  return (
    <setion className="bookTableContainer">
        <div>
        <h4>RESERVATION</h4>
        <h2>BOOK YOUR TABLE</h2>
        </div>
        <div className="imageFloat-burger">
            <img src={BurgerImg} alt="" />
        </div>
        <div className="imageFloat-bottle">
            <img src={BottleImg} alt="" />
        </div>
        <div className="formContaier">
        <form action="" className="bookTableForm">
            <div className="formInput">
                <input type="text" placeholder='Name' />
            </div>
            <div className="formInput">
                <input type="email" placeholder='Email' />
            </div>
            <div className="formInput">
                <input type="date" placeholder='Date' value="Date" />
            </div>
            <div className="formInput">
                <input type="time" placeholder='Time'  />
            </div>
            <div className="formInput">
                <input type="number" placeholder='People' />
            </div>
            <div className="formInput">
                <input type="button" name="FIND A TABLE" placeholder='FIND A TABLE' value="FIND A TABLE" />
            </div>
        </form>
        </div>
        <div className="imageFloat-plate">
            <img src={PlateImg} alt="" />
        </div>
    </setion>
  )
}

export default BookTable