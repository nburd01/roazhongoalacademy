import React from 'react'
import {Link } from 'react-router-dom';
import './MainNav.scss'

export const MainNav = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/rga">La RGA</Link>
        <Link to="/inscriptions">Inscriptions</Link>
        <Link to="/seances">Seances</Link>
        <Link to="/multimedia">Multimédia</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
  </nav>
  )
}