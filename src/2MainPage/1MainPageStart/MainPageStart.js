import React from 'react'
import './MainPageStart.css'

function MainPageStart () {
  return (
    <div className='mainPageStart'>
      <img
        className='mainPageStart-image'
        src={require('./images/5227_20-min.jpg')}
        alt='Delivery men'
      />

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
