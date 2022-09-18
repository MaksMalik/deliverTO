import React from 'react'
import './Footer.css'

function Footer() {

  return (
    <div className="footer">
      <div className="footer-upper">
        <div className="footer-left">
          <div className="footer-logo">
            <i className="fa-solid fa-cube "></i>
            <p className="footer-logo-deliver">deliver</p>
            <p className="footer-logo-to">TO</p>
          </div>
        </div>

        <div className="footer-right">
          <i className="fa-brands fa-facebook icon-footer"></i>
          <i className="fa-brands fa-twitter icon-footer"></i>
        </div>
      </div>
      <div className="footer-copyrights">
        © 2022 deliverTO, All rights reserved.
      </div>
    </div>
  )
}

export default Footer