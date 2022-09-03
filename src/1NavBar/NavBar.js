import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        Delivery
      </div>
      <div className="navbar-links">
        <p><a className="navbar-links-link" href="#WhyUs">Why us</a></p>
        <p><a className="navbar-links-link" href="#Offer">Offer</a></p>
        <p><a className="navbar-links-link" href="#Contact">Contact</a></p>
      </div>
    </div>
  )
}

export default NavBar