import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';

export const MainNav = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/rga">La RGA</Link>
        <Link to="/inscriptions">Inscriptions</Link>
        <Link to="/seances">Seances</Link>
        <Link to="/multimedia">Multimédia</Link>
        <Link to="/contact">Contact</Link>
  </nav>
  )
}