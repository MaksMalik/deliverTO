import React from 'react'
import './WhyUs.css'

function WhyUs() {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('showWhyUs');
      } else {
        entry.target.classList.remove('showWhyUs');
      }
    })
  });
  
  const hiddenElements = document.querySelectorAll('section');
  hiddenElements.forEach((el) => observer.observe(el))

  return (
    <div className="mainPage">
      <div className="mainPageWhyUs-dots">
        <div className="mainPageWhyUs-dot1"></div>
        <div className="mainPageWhyUs-dot2"></div>
        <div className="mainPageWhyUs-dot3"></div>
      </div>

      <section className="mainPageWhyUs hiddenWhyUs">
        <div className="mainPageWhyUs-title" id="WhyUs">Why us?</div>
      </section>
      <div className="mainPageWhyUs-statistics-box">
        <div className="mainPageWhyUs-statistics ">
          <section className="mainPageWhyUs-statistics-time hiddenWhyUs">
            <i className="fa-solid fa-truck-fast icons"></i>
            <p>Lorem ipsum dolor sit amet</p>
          </section>
          <section className="mainPageWhyUs-statistics-perDay hiddenWhyUs">
            <i className="fa-solid fa-cubes icons"></i>
            <p>Over 15.000.000 packages total</p>
          </section>
        </div>
        <div className="mainPageWhyUs-statistics">
          <section className="mainPageWhyUs-statistics-weekends hiddenWhyUs">
            <i className="fa-solid fa-calendar-week icons"></i>
            <p>Deliver even on weekends</p>
          </section>
          <section className="mainPageWhyUs-statistics-time hiddenWhyUs">
            <i className="fa-solid fa-truck-fast icons"></i>
            <p>Max 2 days of delivery</p>
          </section>
          <section className="mainPageWhyUs-statistics-perDay hiddenWhyUs">
            <i className="fa-solid fa-cubes icons"></i>
            <p>Over 20.000 packages per day</p>
          </section>
        </div>

        <section className="mainPageWhyUs-arrow hiddenWhyUs">
          <a href="#Offer">
            <i className="fa-solid fa-arrow-down arrow"></i>
          </a>
        </section>
      </div>
    </div>
  )
}

export default WhyUs