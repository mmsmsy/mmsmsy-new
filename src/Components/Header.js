// import dependencies
import React from 'react'
import { NavLink } from 'react-router-dom'

// import components
import '../Styles/Css/Header.css'
import logo from '../Styles/Images/logo.png'

const Header = () => (
  <div className="header">
    <div className="header-logo"><img src={logo} alt="logo" /></div>
    <NavLink exact activeClassName='is-active' to='/' className='button-header button-header-primary'>home</NavLink>
    <NavLink activeClassName='is-active' to='/about-me' className='button-header'>about me</NavLink>
    <NavLink activeClassName='is-active' to='/skills' className='button-header'>skills</NavLink>
    <NavLink activeClassName='is-active' to='/portfolio' className='button-header'>portfolio</NavLink>
  </div>
)

export default Header
