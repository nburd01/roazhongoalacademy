import React from 'react'
import {Link } from 'react-router-dom';
import './MainNav.scss'
// import logo from '../../assets/img/logo/logo.jpg'

export const MainNav = () => {
  return (
    <div className="MainNav">
      <img className="logo" src={require('../../assets/img/logo/logo.jpg')} alt="logo" />
    <nav className="NavMenu">
        <Link to="/">Home</Link>
        <Link to="/rga">La RGA</Link>
        <Link to="/inscriptions">Inscriptions</Link>
        <Link to="/seances">Seances</Link>
        <Link to="/multimedia">Multimédia</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
    </nav>
    <span className="hamburgerMenu">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
  )
}