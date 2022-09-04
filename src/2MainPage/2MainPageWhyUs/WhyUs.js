import React from 'react'
import './WhyUs.css'

function WhyUs() {

  return (
    <div className="mainPage">
      <div className="mainPageWhyUs-dots">
        <div className="mainPageWhyUs-dot1"></div>
        <div className="mainPageWhyUs-dot2"></div>
        <div className="mainPageWhyUs-dot3"></div>
      </div>

      <div className="mainPageWhyUs">
        <div className="mainPageWhyUs-title" id="WhyUs">Why us?</div>
      </div>
      <div className="mainPageWhyUs-statistics-box">
        <div className="mainPageWhyUs-statistics">
          <div className="mainPageWhyUs-statistics-time">
            <i className="fa-solid fa-truck-fast icons"></i>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="mainPageWhyUs-statistics-perDay">
            <i className="fa-solid fa-cubes icons"></i>
            <p>Over 15.000.000 packages total</p>
          </div>
        </div>

        <div className="mainPageWhyUs-statistics">
          <div className="mainPageWhyUs-statistics-weekends">
            <i className="fa-solid fa-calendar-week icons"></i>
            <p>Deliver even on weekends</p>
          </div>
          <div className="mainPageWhyUs-statistics-time">
            <i className="fa-solid fa-truck-fast icons"></i>
            <p>Max 2 days of delivery</p>
          </div>
          <div className="mainPageWhyUs-statistics-perDay">
            <i className="fa-solid fa-cubes icons"></i>
            <p>Over 20.000 packages per day</p>
          </div>
        </div>

        <div className="mainPageWhyUs-arrow">
          <a href="#Offer">
            <i className="fa-solid fa-arrow-down arrow"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default WhyUs