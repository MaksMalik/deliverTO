import React from 'react'
import './MainPageStart.css'

function MainPageStart () {
  return (
    <div className='mainPageStart'>
      <img
        className='mainPageStart-image'
        src='./images/5227.jpg'
        alt='Delivery men'
      ></img>

      <div>
        <p className='mainPageStart-title'>Deliver with us</p>
        <p className='mainPageStart-getStarted'>
          <a href='#WhyUs'>GET STARTED</a>
        </p>
      </div>
    </div>
  )
}

export default MainPageStart
