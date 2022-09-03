import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <i class="fa-solid fa-cube "></i>
        <p className="navbar-logo-deliver">deliver</p>
        <p className="navbar-logo-to">TO</p>

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