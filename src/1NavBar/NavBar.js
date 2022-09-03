import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        Company Name
      </div>
      <div className="navbar-links">
        <p><a href="#1PartOfPage">1PartOfPage</a></p>
        <p><a href="#2PartOfPage">2PartOfPage</a></p>
        <p><a href="#3PartOfPage">3PartOfPage</a></p>
        <p><a href="#4PartOfPage">4PartOfPage</a></p>
      </div>
    </div>
  )
}

export default NavBar