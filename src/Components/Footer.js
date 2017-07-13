// import dependencies
import React from 'react'

// import components
import logo from '../Styles/Images/logo.svg'
import '../Styles/Css/Footer.css'

const Footer = () => (
  <div className="footer">
    <div className="footer-img">
      <img src={logo} className="footer-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="footer-nav">
      To get started, edit <code>src/Footer.js</code> and save to reload.
    </p>
    <p>My test normal text 2<sup>234</sup> <small>My test small text</small></p>
  </div>
)

export default Footer
