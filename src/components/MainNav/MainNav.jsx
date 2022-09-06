import React from 'react'
import { useState } from 'react';
import {Link } from 'react-router-dom';
import './MainNav.scss'
// import logo from '../../assets/img/logo/logo.jpg'

export const MainNav = () => {

  const [toggleNav, setToggleNav] = useState(false)


  return (
    <div className="MainNav">
      <div className="logoDiv">
        <img className="logo" src={require('../../assets/img/logo/logo.jpg')} alt="logo" />
      </div>

<div className={`navbar-links ${toggleNav ? "active" : ""}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/rga">La RGA</a></li>
            <li><a href="/inscriptions">Inscriptions</a></li>
            <li><a href="/seances">Seances</a></li>
            <li><a href="/multimedia">Multimédia</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

      <span className="toggleBtn"  onClick={() => setToggleNav(!toggleNav)}>
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>
  )
}

